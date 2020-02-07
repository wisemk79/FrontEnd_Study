	package server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ConnectDB {
	//멤버변수
	private Connection con;
	private String url = "jdbc:oracle:thin:@localhost:1521:xe";//localhost내ip   포트번호1521   orcl 오라클의 sid 이름
	private String user = "shield";
	private String password = "1234";
	private String driver = "oracle.jdbc.driver.OracleDriver";
	private PreparedStatement pstmtInsert;
	
	
	//생성자
	public ConnectDB() {
		//1.드라이버로딩
		try {
			Class.forName(driver);
		} catch (ClassNotFoundException e) {
			System.out.println("드라이버 로딩 실패");
		}
		
		//2.DB연결
		try {
			con = DriverManager.getConnection(url, user, password);
		} catch (SQLException e) {
			System.out.println("DB 연결 실패");
		}
		
		//3.Statement 생성
		String sqlInsert = "insert into chatlog(ip, chat) values(?,?)";
		try {
			pstmtInsert =  con.prepareStatement(sqlInsert);
		} catch (SQLException e) {
			System.out.println("Statement 생성 실패");
		}
	}
	
	//Insert문 작성
	public void insert(String ip, String chat) {
		//4.Statement 실행
		try {
			pstmtInsert.setString(1,  ip);
			pstmtInsert.setString(2,  chat);
			int cnt = pstmtInsert.executeUpdate();
			if(cnt > 0) {
				con.commit();
			}
			else {
				System.out.println("DB입력실패");
			}
		} catch (SQLException e) {
			System.out.println("DB입력실패");
		}
		
	}
	
}
