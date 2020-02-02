package exam;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

@SuppressWarnings("serial")
public class Frame extends JFrame {
   // 멤버 변수
	Calculator calculator;
   private Container ct;
   private JPanel jpTop, jpCenter;
   private JButton[] jbNum, jbOp;
   private JTextArea jtaLog;
   private JScrollPane jspLog;
   private JTextField jtfInput;
   private final String[] operator = {"+", "-", "*", "/", "%", "="};
   
   // 생성자
   Frame(String title, int width, int height){
      initComps();
      addComps();
      addActionListener();
      showWnd(title, width, height);
   }
   
   // 멤버 변수 생성
   private void initComps(){
	   //클래스
	   calculator = new Calculator();
	   
      // 컨테이너
      ct = getContentPane();
      
      // 화면 상단
      jpTop = new JPanel();
      jtaLog = new JTextArea();
      jspLog = new JScrollPane(jtaLog);
      // 화면 상단의 아래쪽
      jtfInput = new JTextField();
      
      // 화면 하단
      jpCenter = new JPanel();
      jbNum = new JButton[10];
      for(int i = 0; i < jbNum.length; i++) {
         jbNum[i] = new JButton("" + i);
      }
      jbOp = new JButton[6];
      for(int i = 0; i < jbOp.length; i++) {
         jbOp[i] = new JButton(operator[i]);
      }
   }
   
   // 멤버 변수 초기화
   private void addComps() {
      // Container
      ct.setLayout(new BorderLayout(5, 5));
      ct.add(jpTop, BorderLayout.NORTH);
      ct.add(jpCenter, BorderLayout.CENTER);
      
      // jpTop
      jpTop.setLayout(new BorderLayout(5, 5));
      jpTop.setPreferredSize(new Dimension(300, 200));
      jpTop.add(jtfInput, BorderLayout.SOUTH);
      jpTop.add(jspLog, BorderLayout.CENTER);
      
      // jpCenter
      jpCenter.setLayout(new GridLayout(4, 4, 5, 5));
      for(int i = 0; i < jbNum.length; i++) {
         jpCenter.add(jbNum[i]);
      }
      for(int i = 0; i < jbOp.length; i++) {
         jpCenter.add(jbOp[i]);
      }
   }
   
   private void addActionListener() {
      for(int i = 0; i < jbNum.length; i++) {
    	  int index = i;
    	  jbNum[i].addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				jtfInput.setText(calculator.clickNum(jtfInput.getText(), jbNum[index].getText()));
			}
    	  });
      }
      for(int i = 0; i < jbOp.length; i++) {
    	  int index = i;
    	  jbOp[i].addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				if(jbOp[index].getText().equals("=")) {
					jtaLog.append(calculator.calculation(jtfInput.getText()));//append 기존에 있던 텍스트는 놔둔 상태에서 추가한다.
					jtfInput.setText("");
				}
				else {
					jtfInput.setText(calculator.clickOp(jtfInput.getText(), jbOp[index].getText()));
				}
			}
    		  
    	  });
      }
   }
   
   // 화면 출력
   private void showWnd(String title, int width, int height) {
      setTitle(title);  // 객체(프레임)의 제목 설정
      setSize(width, height);  // 객체(프레임)의 크기 설정
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);  // 창을 닫으면 가동중인 프로세스까지 함께 종료
      setVisible(true);  // 객체를 나타냄(화면에 띄움)
   }
}