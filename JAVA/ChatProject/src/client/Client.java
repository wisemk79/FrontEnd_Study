package client;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;
import java.net.UnknownHostException;

import javax.swing.JTextArea;

public class Client extends Thread {
	//멤버변수
	private Socket socket;
	private String ip;
	private int port;
	private JTextArea jta;
	private BufferedReader br;
	private BufferedWriter bw;
	private boolean connect;
	
	//생성자
	public Client(String ip, int port, JTextArea jta) {
		this.ip = ip;
		this.port = port;
		this.jta = jta;
		connectServer();
		this.start();
				
	}
	
	//서버에 연결하는 메소드
	private void connectServer() {
		try {
			socket = new Socket(ip, port);
			br = new BufferedReader(new InputStreamReader(socket.getInputStream(), "utf-8"));
			bw = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream(), "utf-8"));
			connect = true;
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			connect = false;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			connect = false;
		}

		
	}
	
	//메세지 전송 메소드
	public void sendMsg(String msg) {
		try {
			bw.write(msg);//메세지를 버퍼에다써라
			bw.newLine();//메세지를 택배처럼 상차시킨다
			bw.flush();//메세지를 보내라
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
	}
	
	//연결 확인
	public boolean getConnect() {
		return connect;
	}
	
	//메세지 출력
	public void run() {
		String str = "";
		while(true) {
			try {
				str = br.readLine();
				jta.append(str + "\r\n");//\r은 뒤의 엔터값을 삭제한다.
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			jta.setCaretPosition(jta.getText().length());//
		}
	}
	
}
