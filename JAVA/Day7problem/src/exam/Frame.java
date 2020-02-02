package exam;

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

public class Frame extends JFrame{
	GradeCalculator g = new GradeCalculator();
	// 멤버변수
	private Container ct;
	private JPanel jp1, jp2;
	private JTextArea jta;
	private JScrollPane jsp;
	private JButton jb;
	private JTextField[] jtf;
	private JLabel[] jl;
	private JLabel jlOutput;
	
	// 생성자
	Frame(String title, int width, int height){
		// 1, 2번의 순서 지키기
		initComps();	//1. 변수 생성
		addComps();	//2. 초기화
		addActionListener();
		showWnd(title, width, height);
	}
	
	// 멤버변수 생성하는 메소드
	private void initComps() {
		// 컨테이너
		ct = getContentPane();
		
		// 패널1
		jp1 = new JPanel();
		jta = new JTextArea();
		jsp = new JScrollPane(jta);		//JScrollPane는 매개변수가 필요, 스크롤이 있는 창 안에 jta를 넣어준다고 생각하면 됨
		
		
		// 패널2
		jp2 = new JPanel();
		jb = new JButton("추가");
		jtf = new JTextField[3];
		for(int i = 0; i < jtf.length; i++) {
			jtf[i] = new JTextField();
		}
		jl = new JLabel[4];
		jl[0] = new JLabel("과목명");
		jl[1] = new JLabel("학점");
		jl[2] = new JLabel("평점");
		jl[3] = new JLabel("평점평균");
		
		jlOutput = new JLabel("0");
	}
	
	/*
	 * boderlayout에 add를 하게 되면 반드시 방향지정을 해야한다 ->방향지정 정해져있음
	 * gridlayout
	 */
	
	// 멤버변수 초기화
	private void addComps() {
		ct.setLayout(new BorderLayout(5,5));	//5, 5는 객체들? 사이의 간격
		ct.add(jp1, BorderLayout.CENTER);
		ct.add(jp2, BorderLayout.SOUTH);
		
		// jp1 Panel
		jp1.setLayout(new BorderLayout(5,5));
		jp1.add(jsp, BorderLayout.CENTER);
		
		// jp2 Panel
		jp2.setLayout(new GridLayout(3,4,5,5));
		for(int i = 0; i < jl.length-1; i++) {
			jp2.add(jl[i]);
		}
		jp2.add(new JLabel(""));
		for(int i = 0; i < jtf.length; i++) {
			jp2.add(jtf[i]);
		}
		jp2.add(jb);
		jp2.add(new JLabel(""));
		jp2.add(new JLabel(""));
		jp2.add(jl[3]);
		jp2.add(jlOutput);
	}
		
	   private void addActionListener() {
		    	  jb.addActionListener(new ActionListener() {
					@Override
					public void actionPerformed(ActionEvent e) {
						jta.append((g.clickAdd(jtf[0].getText(), jtf[1].getText(), jtf[2].getText())));
						jlOutput.setText(g.gradeCalculation());
					}
		    	  });
		      }
		      
	
	// 화면 출력
	private void showWnd(String title, int width, int height) {
		setTitle(title);	//객체(프레임)의 제목 설정, 매개변수는 String이 들어간다
		setSize(width, height);	// 객체(프레임)의 크기 설정, int형
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);	// 창을 닫으면 가동중인 프로세스까지 함께 종료
		setVisible(true);		//객체를 화면에 나타낸다
	}
}