package com.javalec.ex;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetSocketAddress;
import java.util.concurrent.Executor;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

/**
 * Servlet implementation class HelloWorld
 */
@WebServlet("/HWorld")//서블릿 클래스의 닉네임 <---어노테이션(해당 자바 코드안에 webservlet 써서 맵핑)을 이용한 맵핑
public class HelloWorld extends HttpServer {//이 서블릿 파일은 java resource의 com.javalec.ex 패키지에 서블릿 파일이 존재
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloWorld() {//jsp파일은 WebContent 쪽에 있다.
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//HttpServletRequest(요청처리객체): 클라이언트가 웹서버한테 요청    HttpServletResponse(응답처리객체): 웹서버가 클라이언트에게 응답해줌
		//이를하면 웹서버에 톰캣이 HttpServletRequest(요청처리객체),HttpServletResponse(응답처리객체) 두 객체를 생성해줌
		//우리가 입력한 id pw는 클라이언트에서  HttpServletRequest 객체에 담겨서 웹서버에 전달된다.
		//서버는 DB와 비교해서 회원인지 비회원인지 구분하고 회원이면 로그인이되고 비회원이면 회원가입페이지로 이동시키는 행동을 HttpServletResponse에 담아서 클라이언트에게 전달한다.
		//response.getWriter().append("Served at: ").append(request.getContextPath());//doGet, doPost 메소드의 내용이 사용자 웹 브라우저에 출력 또는실행된다
		System.out.println("Hello World!");//console 출력
		
		response.setContentType("text/html; charset=euc-kr");//응답을 처리해주는 형태(setContentType)를 html로 응답하겠다
																//charset=euc-kr <- 한글 설정해주기 위해
		PrintWriter writer = response.getWriter();//웹 브라우저에 출력하기 위한 스트림
		//서블릿은 자바파일 형식이기 때문에 html이 아니므로 위에처럼 컨텐츠 타입을 설정해준 상태에서 해야된다.
		writer.println("<html>");
		writer.println("<head>");
		writer.println("</head>");
		writer.println("<body>");
		writer.println("<h1>Hello World!!</h1>");
		writer.println("</body>");
		writer.println("</html>");
		
		writer.close();
		
		
		//클라이언트에서 웹 어플리케이션 쪽으로 요청(request)하는 방식이 2가지가 있느데 doGet(겟 방식 리퀘스트)과 doPost(포스트방식 리퀘스트)가 있다.
		//doGet 방식 request는 URL값으로 정보가 전송되어 보안에 약함// .com 주소뒤에 정보를 실어서 정보가 전송되기 때문에 보안이 약하다.
		/*html내 form태그의 method속성이 get일 경우 호출된다.
		 * <form action = "http://localhost:8080/form.jsp" accept-charset="utf-8" 
              name = "person_info" method = "get"> */
		
		//doPost 방식 request는 header를 이용해 정보가 전송되어 보안에 약함//url에 실어보내는 정보를 볼수가 없기 때문에 보안에 강하다.
		/* <form action = "http://localhost:8080/form.jsp" accept-charset="utf-8" 
	              name = "person_info" method = "post"> */
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	@Override
	public void bind(InetSocketAddress addr, int backlog) throws IOException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void start() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setExecutor(Executor executor) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Executor getExecutor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void stop(int delay) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public HttpContext createContext(String path, HttpHandler handler) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public HttpContext createContext(String path) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeContext(String path) throws IllegalArgumentException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeContext(HttpContext context) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public InetSocketAddress getAddress() {
		// TODO Auto-generated method stub
		return null;
	}

}
