package com.javalec.ex;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FormEx
 */
@WebServlet("/FormEx")
public class FormEx extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FormEx() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doGet");
		//get방식 인코딩 방법: server.xml파일에서  connector 태그에 UREncoding ="EUC-KR" 을 작성해줘야 한글이 안깨진다.
		//server.xml파일 변경된 사항 적용은 서버탭의 오른쪽 맨 끝 아이콘인 publish to the server를 눌러줘야 적용된다.
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doPost");
		
		
		//post방식 인코딩 방법
		request.setCharacterEncoding("EUC-KR");
		
		String name = request.getParameter("name");
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		
		String[] hobbys = request.getParameterValues("hobby");
		String major = request.getParameter("major");
		String protocol = request.getParameter("protocol");
		

		
		response.setContentType("text/html; charset = EUC-KR");
		PrintWriter writer =  response.getWriter();

		
		
		writer.println("<html><head></head><body>");
		writer.println("이름 : " + name + "<br>");
		writer.println("아이디 : " + id + "<br>");
		writer.println("비밀번호 : " + pw + "<br>");
		writer.println("취미 : " + Arrays.toString(hobbys) + "<br>");
		writer.println("전공 : " + major + "<br>");
		writer.println("프로토콜 : " + protocol + "<br>");
		writer.println("</body></html>");
	}

}
