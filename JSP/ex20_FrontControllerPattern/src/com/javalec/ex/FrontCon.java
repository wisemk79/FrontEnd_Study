package com.javalec.ex;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class FrontCon
 */
@WebServlet("*.do")//*.do로 맵핑 시켜주면 .do가 붙은 모든 요청을  이 서블릿에서 처리해준다. 
public class FrontCon extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FrontCon() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("doGet");
		actionDo(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("doPost");
		actionDo(request, response);
	}
	
	private void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("actionDo");
		
		String uri = request.getRequestURI();//context path 값, 파일이름을 가져오게된다 -> /ex20_FrontControllerPattern/insert.do
		System.out.println("uri : " + uri);
		String conPath = request.getContextPath();//context path 값만 나오게된다. /ex20_FrontControllerPattern
		System.out.println("conPath : " + conPath);
		String command = uri.substring(conPath.length());//context path의 길이만큼 uri에서 잘라버린다.(substring) -> /insert.do
		System.out.println("command : " + command);

		if(command.equals("/insert.do")){// .do 앞이 insert이면 아래의 로직을 수행한다.
			System.out.println("insert");
			System.out.println("----------------");
		}else if(command.equals("/update.do")){// .do 앞이 update이면 아래의 로직을 수행한다.
			System.out.println("update");
			System.out.println("----------------");
		}else if(command.equals("/select.do")){
			System.out.println("select");
			System.out.println("----------------");
		}else if(command.equals("/delete.do")){
			System.out.println("delete");
			System.out.println("----------------");
		}
	}

}
