package com.javalec.ex;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloWorld
 */
@WebServlet("/HelloWorld")
public class HelloWorld extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloWorld() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {//throws는 예외를 자신이 처리하지 않고 자신을 호출하는 메소드에게 책임을 전가하는것 
																														//doget 메소드가 ServletException, IOException라는 예외를 던진다.
		System.out.println("doGet");
		
		response.setContentType("text/html; charset = euc-kr");//서버에서 응답을 할때 컨텐츠타입을 html로 응답해주겠다는 의미이다.
										//만약 여기서 캐릭터셋을 지정해주지 않으면 응답할때 한글이 깨지는 현상이발생함 
		PrintWriter writer = response.getWriter();//서블릿은 자바 형태이기 때문에 PrintWriter이라는 스트림을 응답객체에서  get으로가져와서 응답한다.
		
		writer.println("<html>");//이와같이 작성하고 ""안에 html코드를 작성하면 되겠습니다.
		writer.println("<head>");
		writer.println("</head>");
		writer.println("<body>");
		writer.println("HelloWorld!!!!");
		writer.println("</body>");
		writer.println("</html>");
		
		
		writer.close();//마지막으로 스트림을 닫아줌 
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doPost");
	}

}
