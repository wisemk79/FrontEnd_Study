package server;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class Frame extends JFrame {//JFrame 클래스를 상속받는다
	//멤버변수
	private Server server;
	//container
	private Container ct;//가장큰틀 창의 역할을함
	
	//component(container위에 올려져 화면 구성을 하는 요소들)
	private JPanel jpTop, jpCenter, jpBottom;//화면을 나눈다.
	private JTextField jtfPort, jtfChat;//한줄의 문장
	private JButton jbCreate, jbSend;//버튼
	private JTextArea jtaLog;//여러줄의 문장
	private JScrollPane jspLog;//스크롤
	
	//생성자
	Frame(String title,int width, int height){
		initComps();
		addComps();
		addActionListener();
		showWnd(title, width, height);
	}
	
	//변수생성
	private void initComps() {
		ct = getContentPane();//프레임에 연결된 컨텐트 펜을 알아낸다.<--이곳에 패널을 단다. <--컴포넌트를 넣을 컨테이너 구하기
		jpTop = new JPanel();//영역을 나눠준다
		jpCenter = new JPanel();
		jpBottom = new JPanel();
		jtfPort = new JTextField();
		jtfChat = new JTextField();//텍스트 입력
		jbCreate = new JButton("생성");//버튼 <--괄호안에 텍스트입력
		jbSend = new JButton("보내기");
		jtaLog = new JTextArea();//Swing에서의 텍스트 영역.. 스크롤바가 존재하지 않는다.
		jspLog = new JScrollPane(jtaLog);//Swing에서 스크롤바를 넣는것
	}
	
	//변수초기화
	private void addComps() {
		//LayoutManager (container 위에 component들을 올릴때 자리 배치 방법) ex)BorderLayout,GridLayout
		ct.setLayout(new BorderLayout(5,5));//레이아웃 설정
		ct.add(jpTop, BorderLayout.NORTH);//Container 위에 Component를 추가
		ct.add(jpCenter, BorderLayout.CENTER);//a.add(컴포넌트,위치) <-위치지정을 안하는 경우  기본적으로 center위치
		ct.add(jpBottom, BorderLayout.SOUTH);
		
		jpTop.setLayout(new GridLayout(2,2,5,5));
		/*GridLayout 테이블 형태의 레이아웃
		 * 인수를 주지 않으면 행은 1행으로 고정되고 열이 계속 추가된다.
		 * 행,열 인수에 0이 들어갈 수 있는데 
		 * 예를들어, (2,0)이면 행은 2행으로고정하고 열은 무한대로 늘어날 수 있다는 의미*/
		jpTop.add(new JLabel("Server Port", JLabel.CENTER));
		jpTop.add(new JLabel(""));
		jpTop.add(jtfPort);
		jpTop.add(jbCreate);
		
		jpCenter.setLayout(new BorderLayout(5,5));
		jpCenter.add(jspLog, BorderLayout.CENTER);
		
		jpBottom.setLayout(new BorderLayout(5,5));
		jpBottom.add(new JLabel("채팅", JLabel.CENTER), BorderLayout.WEST);
		jpBottom.add(jtfChat, BorderLayout.CENTER);
		jpBottom.add(jbSend, BorderLayout.EAST);
		jbSend.setEnabled(false);//보내기 버튼 비활성화(setEnabled)
	}
	
	//이벤트처리
	/*ActionListener라는 인터페이스를 구현해야 하는데
구현방법에는 크게 두가지로 나뉘게 됩니다.

익명(=무명)클래스(Anonymous Class)

익명(무명)클래스는 따로 클래스를 생성하지 않고 하나의 클래스내에서 인터페이스를 구현해준 다음에
그 인터페이스에 맞는 메소드를 오버라이딩 해주는 방법

*/
	private void addActionListener() {
		jbCreate.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				server = new Server(Integer.parseInt(jtfPort.getText()),jtaLog);
				jbSend.setEnabled(true);//생성을누르면 보내기가 활성화된다.
			}
		});
		
		jbSend.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				server.sendAdminMsg(jtfChat.getText());
				jtfChat.setText("");
			}
			
		});
	}
	
	//화면출력
	private void showWnd(String title, int width, int height) {
		setTitle(title);
		setSize(width, height);//크기 지정
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//swing에만 있는 X버튼 클릭시 종료
		setVisible(true);//Container 보이기
	}
	
}
