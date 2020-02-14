package j200213;

import java.awt.*;
import java.awt.event.*; // 이벤트처리 => ActionEvent -> ActionListener 이용
import java.sql.SQLException;

import javax.swing.*;
// 추가 
import javax.swing.table.*; // DefaultTableModel 클래스


public class DB_Person extends JFrame implements ActionListener {
   /**
	 * 
	 */
	private static final long serialVersionUID = 6104339169299969366L;
	ConnectDB con = new ConnectDB();
   JLabel l1, l2, l3; // 이름, 나이, 전화번호
   JTextField tf1, tf2, tf3; 
   JPanel panel; // 다른 컴포넌트를 감싸는 영역
   // JTable
   Object ob[][] = new Object[0][3]; // 행X, 열만 표시
   DefaultTableModel model; // 데이터 저장시키는 영역
   JTable table;
   JScrollPane js;
   String str[] = {"이름", "나이", "전화번호"}; // 컬럼명
     
   public DB_Person() {
      super("테이블에 데이터 입력");
      panel = new JPanel();
      panel.setBackground(Color.orange);
      // 1. 출력문자열 2. 위치(left,center,right)
      l1 = new JLabel("이름", JLabel.CENTER);
      l2 = new JLabel("나이", JLabel.LEFT);
      l3 = new JLabel("전화번호", JLabel.RIGHT);
      
      tf1 = new JTextField();
      tf2 = new JTextField();
      tf3 = new JTextField();
      // 패널 => 3행 2열 => GridLayout
      panel.setLayout(new GridLayout(3,2));
      panel.add(l1); panel.add(tf1); // 이름
      panel.add(l2); panel.add(tf2); // 나이
      panel.add(l3); panel.add(tf3); // 전화번호
      
      // 패널을 위쪽에 부착
      this.add("North", panel); // 1. 위치 2. 부착시킬 컴포넌트명
      // JTable <= 모델을 따로 만들어서 부착
      model = new DefaultTableModel(ob, str); // 1. 데이터 저장부분[][] 2. 컬럼명
      table = new JTable(model); // table = new JTable(ob, str);
      js = new JScrollPane(table);
      this.add("Center", js);
      
      // 화면에 출력
      setBounds(1250, 250, 400, 300);
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      setVisible(true);  
      
      
      // 이벤트처리
      tf1.addActionListener(this);
      tf2.addActionListener(this);
      tf3.addActionListener(this);
      model.addRow(con.select());
   }
   
   @Override
   public void actionPerformed(ActionEvent e) {

      // e.getSource() 이벤트를 발생시키는 컴포넌트를 얻어온다
      if(e.getSource() == tf1) { // 이름란에 이름을 입력하고 enter쳤다면
         tf2.requestFocus(); // 커서이동
         
      } else if(e.getSource() == tf2) { // 나이
         tf3.requestFocus();
      } else if(e.getSource() == tf3) { // 전번
         if(tf1.getText().equals("") && tf2.getText().equals("") && tf3.getText().equals("")) {
            // alert(~) 자바스크립트
            // 형식) JOptionPane.showMessageDialog(부모객체명, 경고메시지)
            JOptionPane.showMessageDialog(this, "최소 하나는 입력해야 됩니다");
            tf1.requestFocus(); // tf1으로 커서 이동
            return;
         } // if문
         con.insert(tf1.getText(), tf2.getText(), tf3.getText());
         
         // 형식) 모델객체명.addRow(저장할값 => 배열의값)
         Object data[] = {tf1.getText(), tf2.getText(), tf3.getText()}; // 어느 데이터든지 다 저장이 가능하도록 Object
         model.addRow(data);
         // 값이 입력 되었다면 다시 입력 받을수 있도록 초기화(커서 tf1으로 이동)
         tf1.setText("");
         tf2.setText("");
         tf3.setText("");
         tf1.requestFocus();
      }
   }

   public static void main(String[] args) {
      
      new DB_Person();
      
   }

}