package prob;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class Frame extends JFrame{
	private Container ct;//창
	private JPanel jp1, jp2, jp3;//영역나누기
	private JTextArea jta;//여러줄의문장
	private JScrollPane jsp;//스크롤
	private JButton jb[];//버튼
	private JTextField jtf;
	

	Frame(String title, int width, int height){
		initComps();//1. 변수 생성
		addComps();//2. 초기화
		showWnd(title, width, height);
	}
	
	private void initComps() {
		//컨테이너
		ct = getContentPane();
		
		//패널1
		jp1 = new JPanel();
		jta = new JTextArea();
		jsp = new JScrollPane(jta);//JScrollPane는 매개변수가 필요, 스크롤이 있는 창 안에 jta를 넣어준다고 생각하면 됨
		jtf = new JTextField();
		
		
		//패널3
		jp3 = new JPanel();
		jb = new JButton[16];
	      for(int i = 0; i < jb.length; i++) {
	         jb[i] = new JButton("" + i);
	         jb[i].
	         
	         
	         setPreferredSize(new Dimension(60, 48));
	         
	       }
	     jb[10].setText("+"); 
	     jb[11].setText("-"); 
	     jb[12].setText("*"); 
	     jb[13].setText("/"); 
	     jb[14].setText("%"); 
	     jb[15].setText("="); 
	}
	
	private void addComps() {
		ct.setLayout(new BorderLayout(5,5));
		ct.add(jp1,BorderLayout.CENTER);
		ct.add(jp3,BorderLayout.SOUTH);
		
		//jp1 Panel
		jp1.setLayout(new BorderLayout(5,5));
		jp1.add(jsp, BorderLayout.CENTER);
		jp1.add(jtf, BorderLayout.SOUTH);
		
		
		//jp2 Panel
		
		//jp3 Panel
		jp3.setLayout(new GridLayout(4,4,5,5));//행 열
		for(int i = 0; i < jb.length; i++) {
		jp3.add(jb[i]);
		}
	}
	
	private void showWnd(String title, int width, int height) {
		setTitle(title);//객체(프레임)의 제목 설정, 매개변수는 String이 들어간다
		setSize(width, height);	// 객체(프레임)의 크기 설정, int형
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);	// 창을 닫으면 가동중인 프로세스까지 함께 종료
		setVisible(true);//객체를 화면에 나타낸다
	}
	
	
	
}
