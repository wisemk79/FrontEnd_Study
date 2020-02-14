package j200213;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ConnectDB {
	//멤버변수
	private Connection con;
	private String url = "jdbc:oracle:thin:@localhost:1521:xe";//localhost내ip   포트번호1521   orcl 오라클의 sid 이름
	private String user = "scott";
	private String password = "tiger";
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
		String sqlInsert = "insert into person(name, age, tel) values(?,?,?)";
		try {
			pstmtInsert =  con.prepareStatement(sqlInsert);
		} catch (SQLException e) {
			System.out.println("Statement 생성 실패");
		}
	}
	
	//Insert문 작성
	public void insert(String name, String age, String tel) {
		//4.Statement 실행
		try {
			pstmtInsert.setString(1,  name);
			pstmtInsert.setString(2,  age);
			pstmtInsert.setString(3,  tel);
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
	
	public Object[] select() {
		String name = null;
		String age = null;
		String tel = null;
		
		
		PreparedStatement pstmt = null;
		ResultSet set = null;
		String query = "select * from person";
		
		try {
			pstmt = con.prepareStatement(query);
			set = pstmt.executeQuery();
			
			if(set.next()){
				name = set.getString("name");
				age = set.getString("age");
				tel = set.getString("tel");
			
			} else {
				name = "";
				age = "";
				tel = "";
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				set.close();
				pstmt.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return new Object[] {name, age, tel};
	}

	
	
}
