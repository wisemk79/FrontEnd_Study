package com.javalec.daotoex;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.naming.InitialContext;
import javax.sql.DataSource;

import org.apache.catalina.Context;



public class MemberDAO {//데이터를 직접 접속해서 데이터를 관리, 수정함  database access  
//	private String url = "jdbc:oracle:thin:@localhost:1521:xe";
//	private String uid = "scott";
//	private String upw = "tiger";
	
	public MemberDAO() {
//		try {
//			Class.forName("oracle.jdbc.driver.OracleDriver");
//		}catch(Exception e) {
//			e.printStackTrace();
//		}
		
		try {
			Context context = new InitialContext();
			dataSource = (DataSource)context.lookup("java:comp/env/jdbc/Oracle11g");
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public ArrayList<MemberDTO> memberSelect(){
		
		ArrayList<MemberDTO> dtos = new ArrayList<MemberDTO>();
		
		Connection con = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		try {
//			con = DriverManager.getConnection(url, uid, upw);
			con = dataSource.getConnection();
			stmt = con.createStatement();
			rs = stmt.executeQuery("select * from member");
		while(rs.next()) {
			String name = rs.getString("name");
			String id = rs.getString("id");
			String pw = rs.getString("pw");
			String phone1 = rs.getString("phone1");
			String phone2 = rs.getString("phone2");
			String phone3 = rs.getString("phone3");
			String gender = rs.getString("gender");
			
			MemberDTO dto = new MemberDTO(name, id, pw, phone1, phone2, phone3, gender);
			dtos.add(dto);//어레이 리스트에 정보를 담는다. 
		}
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null) rs.close();
				if(stmt != null) stmt.close();
				if(con != null) con.close();
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		return dtos;
	}
}
