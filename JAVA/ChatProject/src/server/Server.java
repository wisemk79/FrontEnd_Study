package server;

import java.io.BufferedReader;//입력스트림
import java.io.BufferedWriter;//출력스트림
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;//보조스트림 기반스트림을 보조해주는 역할 실질적으로 입출력을 담당하지 않음
import java.io.UnsupportedEncodingException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;

import javax.swing.JTextArea;

public class Server extends Thread {
	// 멤버변수
	private ConnectDB conDB;
	private Clients chatAdmin;
	private ServerSocket serverSocket;
	private int port;
	private JTextArea jta;
	private ArrayList<Socket> clients;

	// 생성자
	public Server(int port, JTextArea jta) {
		this.port = port;
		this.jta = jta;
		clients = new ArrayList<Socket>();// 사용자가 오면 그 사용자의 소켓 주소를 ArrayList에 저장한다
		chatAdmin = new Clients(null);
		conDB = new ConnectDB();
		openServer();
		this.start();
	}

	// 서버오픈
	private void openServer() {
		try {
			serverSocket = new ServerSocket(port);// 서버 생성을 위한 ServerSocket
			jta.append("서버가 연결되었습니다.\r\n");// 메세지출력
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// 관리자(서버) 메세지 전송
	public void sendAdminMsg(String msg) {
		String str = "관리자: " + msg;
		chatAdmin.send(serverSocket.getInetAddress().getHostAddress(), str);// getInetAddress().getHostAddress()는 아이피를 얻고 클라이언트에 전송한다.

	}

	// 클라이언트 접속 대기
	public void run() {
		while (true) {
			try {
				Socket socket = serverSocket.accept();// Client와 통신하기 위한 Socket //서버 생성 , Client 접속 대기
				// 클라이언트 객체 생성,
				new Clients(socket).start();
			} catch (IOException e) {// 입출력 동작 실패 또는 인터럽트 시 발생
				e.printStackTrace();// 오류 출력(방법은 여러가지)
			}
		}
	}

	// 내부 클래스:클라이언트 객체
	class Clients extends Thread {
		// 멤버변수
		private Socket socket;
		private BufferedWriter bw;
		private BufferedReader br;
		/*
		 * BufferedReader / BufferedWriter는 문자 입력 스트림으로부터 문자를 읽어 들이거나 
		 * 문자 출력 스트림으로 문자를 내보낼 때 버퍼링을 함으로써 문자, 문자 배열, 문자열 라인 등을 보다 효율적으로 처리할 수 있도록 해준다.
			
			InputStreamReader / OutputStreamWriter를 사용하는 경우는 한 문자씩 읽지만 버퍼링을 하게 되면 
			입출력 스트림으로부터 미리 버퍼에 데이터를 갖다 놓기 때문에 보다 효율적으로 입출력할 수 있다.

			BufferedReader / BufferedWriter는 BufferedInputStream / BufferedOutputStream과 기능이 비슷하지만, 
			BufferedInputStream / BufferedOutputStream은 바이트 단위의 처리, 
			BufferedReader / BufferedWriter는 문자(Char) 단위 처리라는 차이가 있다.
		 */
		
		// 생성자
		public Clients(Socket socket) {
			this.socket = socket;
		}

		// 메세지 전송
		private void send(String ip, String msg) {
			/*
			 * for(데이터형 접근변수명 : 배열이나 컬렉션 변수명) { 반복코드 }
			 */
			for (Socket socket : clients) {// clients의 길이만큼 포문을 돌리겠다
				try {
					bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream(), "utf-8"));//클라이언트에게 보내는것
					bw.write(msg);//메세지 전송
					bw.newLine();/*newLine() 메소드로 문자를 출력할 때 줄 바꿈이 필요할 때, 버퍼에 newLine() 메소드를 사용하여 줄 바꿈을 할 수 있다.
											readLine()한줄을 읽는다. "\n", "\r"을 만날때 까지 읽어온다.*/
					bw.flush();//flush()는 현재 버퍼에 저장되어 있는 내용을 클라이언트로 전송하고 버퍼를 비운다. (JSP)
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			jta.append(msg + "\r\n");
			jta.setCaretPosition(jta.getText().length());//스크롤이 내려가는 것에 맞춰 화면 고정
			conDB.insert(ip, msg);
		}

		// 하나의 클라이언트로부터 메세지를 받으면 모든 클라이언트들에게 메세지를 뿌려주는 기능
		public void run() {
			String ip = null;
			String msg;

			try {
				// 서버의 클라이언트 배열에 클라이언트를 추가
				clients.add(socket);
				ip = socket.getInetAddress().getHostAddress();//각 사용자의 ip를 얻는다
				br = new BufferedReader(new InputStreamReader(socket.getInputStream(), "utf-8"));// 입력스트림 생성
				/*
				 * BufferedReader의 생성자에서 필요한 인자는 InputStreamReader를 사용하면 된다. 결국 키보드에서 입력한 문자열은
				 * 키보드 버퍼에 정보를 저장해 두었다가 사용자가 입력을 마치면 문자열이 JVM에 전달되고 전달된 문자는 다시 System.in인
				 * InputStream 객체로 저장된다. 다시 이는 InputStreamReader 객체를 생성하는데 사용되고 이어서
				 * BufferedReader 클래스로 부터 객체를 생성하는데 사용되어 진다. BufferedReader 클래스에는 버퍼가 있기 때문에
				 * 문자열을 버퍼에 저장해 놓았다가 readLine() 메소드를 통해 한 줄을 한번에 읽어 들이게 되는 것이다. Keyboard buffer
				 * -> inputStream -> InputStreamReader -> BufferedReader -> br.readLine()
				 */

				// 입장 알림
				msg = "(" + ip + ")님이 입장하셨습니다.";
				send(ip, msg);//해당 ip에 메세지 전송

				// 클라이언트 메세지 읽기
				while ((msg = br.readLine()) != null) {//메세지에 데이터가 있으면
					// 모든 클라이언트들에게 메세지 전송
					msg = "(" + ip + ")" + msg;
					send(ip, msg);//해당 ip에 메세지를 전송
				}
			} catch (IOException e) {
				// 서버의 클라이언트 배열에서 해당 클라이언트를 제거
				clients.remove(socket);//배열의 소켓을 제거 
				socket = null;

				// 퇴장 알림
				msg = "(" + ip + ")님이 퇴장하셨습니다.";
				send(ip, msg);
			}
		}
	}
}
