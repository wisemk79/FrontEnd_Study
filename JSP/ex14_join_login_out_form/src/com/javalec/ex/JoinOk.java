package com.javalec.ex;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class JoinOk
 */
@WebServlet("/JoinOk")
public class JoinOk extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private Connection connection;
	private Statement stmt;
	
	private String name, id, pw, phone1, phone2, phone3, gender;

    public JoinOk() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			System.out.println("doGet");
			actionDo(request, response);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			System.out.println("doPost");
			actionDo(request, response);
	}
	
	
	private void actionDo(HttpServletRequest request, HttpServletResponse response) throws IOException {
		
		try {
			request.setCharacterEncoding("EUC-KR");
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		name = request.getParameter("name");
		id = request.getParameter("id");
		pw = request.getParameter("pw");
		phone1 = request.getParameter("phone1");
		phone2 = request.getParameter("phone2");
		phone3 = request.getParameter("phone3");
		gender = request.getParameter("gender");
		
		String query = "insert into member values('" + name + "', '" + id + "', '" + pw + "', '" + phone1 + "', '" + phone2 + "', '" + phone3 + "', '" + gender + "' )";
								//위에처럼 표현한 이유는 sql쿼리에 'name', 'id', 'pw', 'phone1' <-이런식으로 넣어주기 위함이다. 
		
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "scott", "tiger");
			stmt = connection.createStatement();
			int i = stmt.executeUpdate(query);
			if(i == 1) {
				System.out.println("insert success");
				response.sendRedirect("joinResult.jsp");
			}else {
				System.out.println("insert fail");
				response.sendRedirect("join.html");
			}
			
		}catch(Exception e) {
			e.printStackTrace();
			System.out.println("insert fail");
			response.sendRedirect("join.html"); 
		}finally {
			try {
				if(stmt != null) stmt.close();
				if(connection != null) connection.close();
			}catch(Exception e) {
				
			}
			
		}
	}

}
