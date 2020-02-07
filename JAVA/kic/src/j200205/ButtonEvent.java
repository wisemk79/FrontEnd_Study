package j200205;

import java.awt.*;
import javax.swing.*;
import java.awt.event.*;

//버튼클릭->ActionEvent->ActionListener->actionPerformed(),텍스트필드
public class ButtonEvent extends JFrame implements ActionListener{

   JButton b1,b2,b3,b4;
   JTextField tf1;//사용자로부터 값을 입력을 받을때
   
   //컴포넌트를 생성하는 방법(창->패널->버튼)<->컴포넌트 부착시키는 방법(버튼->패널->창부착)
   public ButtonEvent() {
      super("버튼을 이용한 이벤트처리와 객체형변환");
      setBounds(300,200,300,250);//x,y,w,h
      getContentPane().setLayout(new GridLayout(5,1,3,3));//5X1 표
      //JPanel p=new JPanel();
      //창에 부착시킬 컴포넌트를 생성
      b1=new JButton("시작");
      b2=new JButton("고");
      b3=new JButton("백");
      b4=new JButton("점프");
      tf1=new JTextField(" ");//빈입력창
      //부착시키는 순서=>컴포넌트를 만드는 순서와 정반대로 코딩
      //p.add(comp)~ getContentPane().add(p)
      this.add(b1); add(b2); add(b3); add(b4);add(tf1);
      //4번째 Inner Class사용
      this.addWindowListener(new WindowAdapter() {
         public void windowClosing(WindowEvent e) {//객체를 얻어오는 방법(매개변수)
            System.exit(0);
         }
      });
      //버튼갯수만큼 클릭->호출
      b1.addActionListener(this);
      b2.addActionListener(this);
      b3.addActionListener(this);
      b4.addActionListener(this);
      tf1.addActionListener(this);
      
      setVisible(true);
   }
   //버튼을 클릭했을때 내부적으로 자동으로 호출되는 메서드(콜백메서드)
   /*ActionEvent ->이벤트 발생 컴포넌트 정보를 얻어다 주는 클래스객체
    * 1.이벤트 발생시킨 컴포넌트의 이름->e.getActionCommand()
    * 2.이벤트 발생시킨 컴포넌트의 종류->e.getSource()->tf=>객체형변환 사용
    */
   @Override
   public void actionPerformed(ActionEvent e) {//JButton or JTextField
      // TODO Auto-generated method stub
      System.out.println(e.getActionCommand());
      String s=e.getActionCommand();
      //추가->이벤트를 발생시킨 컴포넌트의 정보얻어오기 ->e.getSource()
      Object o=e.getSource();
      //이벤트를 발생시킨것이 버튼이라면
      if(o instanceof JButton) {
         JButton b=(JButton)o;//부모객체->(자식객체클래스명)
      //시작버튼을 눌렀다면 버튼의 색깔은 빨간색,시작문자열을 창의 제목에 출력
         if(s.contentEquals("시작")) {
            //getConentPane()이 붙는경우->JFrame에 관련된 색깔부여할때
            b.setBackground(Color.red);
            this.setTitle(s);
         }else if(s.contentEquals("고")) {
            b.setBackground(Color.yellow);
            this.setTitle(s);
         }else if(s.contentEquals("백")) {
            b.setBackground(Color.blue);
            this.setTitle(s);
         }else if(s.contentEquals("점프")) {
            b.setBackground(Color.orange);
            this.setTitle(s);
         }
      }else {//이벤트발생객체->JTextField
         JTextField tf2=(JTextField)o;
         tf2.setText("객체형변환이 중요해요!");//<->tf2.getText()
         setTitle(tf2.getText());
         //tf2.setText("");//지우기
      }
   }
   public static void main(String[] args) {
      // TODO Auto-generated method stub
             new ButtonEvent();//익명객체생성
   }

}



