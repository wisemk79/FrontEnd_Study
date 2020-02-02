package com.javalec.ex;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ServletInitParam
 */
@WebServlet(urlPatterns = {"/InitP"}, initParams = {@WebInitParam(name = "id", value = "aaaaa"), @WebInitParam(name = "pw", value = "99999")} )//<--이렇게 초기 파라미터를 줄 수 있다.
public class ServletInitParam extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletInitParam() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			System.out.println("doGet");
			
			String id = getInitParameter("id");
			String pw = getInitParameter("pw");
			String path = getInitParameter("path");
			
			response.setContentType("text/html; charset = EUC-KR"); 
			PrintWriter writer = response.getWriter();// 응답 문서에 출력하기 위한 PrintWriter 객체를 가지고 옴
			
			writer.println("<html><head></head><body>");
			writer.println("아이디 : " + id + "<br>");
			writer.println("비밀번호 : " + pw + "<br>");
			writer.println("패스 : " + path + "<br>");
			writer.println("</body></html>");
			
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			System.out.println("doPost");
	}

}
