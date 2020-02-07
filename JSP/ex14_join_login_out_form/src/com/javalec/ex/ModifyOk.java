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
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class modify
 */
@WebServlet("/ModifyOk")
public class ModifyOk extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private Connection connection;
	private Statement stmt;
	private HttpSession httpSession;
	
	private String name, id, pw, phone1, phone2, phone3, gender;

    public ModifyOk() {
        super();
        // TODO Auto-generated constructor stub
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
		httpSession = request.getSession();
		
		name = request.getParameter("name");
		id = request.getParameter("id");
		pw = request.getParameter("pw");
		phone1 = request.getParameter("phone1");
		phone2 = request.getParameter("phone2");
		phone3 = request.getParameter("phone3");
		gender = request.getParameter("gender");
		
	if(pwConfirm()) {
		
		System.out.println("OK");
		
		String query = "update member set name ='" + name + "', phone1 = '" + phone1 + "', phone2 = '" + phone2 + "', phone3 = '" + phone3 + "', gender = '" + gender + "'";
		//System.out.println(query);
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "scott", "tiger");
			stmt = connection.createStatement();
			int i = stmt.executeUpdate(query);
			if(i == 1) {
				System.out.println("update success");
				httpSession.setAttribute("name", name);
				response.sendRedirect("modifyResult.jsp");
			}else {
				System.out.println("update fail");
				response.sendRedirect("modify.html");
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
	}else {
		System.out.println("NG");
	}
}

	private boolean pwConfirm() {
		boolean rs = false;
		
		String sessionPw = (String)httpSession.getAttribute("pw");
		
		if(sessionPw.equals(pw)){
			rs = true;
		}else {
			rs = false;
		}
		return rs;
	}

}
