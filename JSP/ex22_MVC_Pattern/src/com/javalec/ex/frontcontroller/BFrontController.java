package com.javalec.ex.frontcontroller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.javalec.ex.command.BCommand;
import com.javalec.ex.command.BContentCommand;
import com.javalec.ex.command.BDeleteCommand;
import com.javalec.ex.command.BListCommand;
import com.javalec.ex.command.BModifyCommand;
import com.javalec.ex.command.BReplyCommand;
import com.javalec.ex.command.BReplyViewCommand;
import com.javalec.ex.command.BWriteCommand;

/**
 * Servlet implementation class BoardFrontController
 */
@WebServlet("*.do")
public class BFrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BFrontController() {
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
		
		request.setCharacterEncoding("EUC-KR");
		
		String viewPage = null;//어떤 뷰를 보여줄것인지 컨트롤하는 것<----이것과 아래 커멘드 객체를 가지고있어야함 
		BCommand command = null;//어떤 로직을 수행할지 결정해주는 커멘트 객체 
		
		String uri = request.getRequestURI();//uri를 가져오고 
		String conPath = request.getContextPath();// 컨텍스트 패스를 가져온다.
		String com = uri.substring(conPath.length());// 뒤에 파일명을 가져옴 
		
		if(com.equals("/write_view.do")) {//작성하는 화면 
			viewPage = "write_view.jsp";//뷰페이지가 
		} else if(com.equals("/write.do")) {//작성하는 페이지인 경우 
			command = new BWriteCommand();//BWriteCommand객체를 실행하고 
			command.execute(request, response);// execute메소드를 실행한다음에 
			viewPage = "list.do";//뷰페이지에다가 리스트 가 보여지게 하는것 
		} else if(com.equals("/list.do")) {//리스트 
			command = new BListCommand();
			command.execute(request, response);
			viewPage = "list.jsp";
		} else if(com.equals("/content_view.do")){//컨텐츠뷰 
			command = new BContentCommand();
			command.execute(request, response);
			viewPage = "content_view.jsp";
		} else if(com.equals("/modify.do")) {//수정뷰 
			command = new BModifyCommand();
			command.execute(request, response);
			viewPage = "list.do";
		} else if(com.equals("/delete.do")) {//삭제뷰 
			command = new BDeleteCommand();
			command.execute(request, response);
			viewPage = "list.do";
		} else if(com.equals("/reply_view.do")) {// 답변 뷰 
			command = new BReplyViewCommand();//각각의 역할에 맞는 커멘드 객체를 생성한다. 
			command.execute(request, response);
			viewPage = "reply_view.jsp";
		} else if(com.equals("/reply.do")) {
			command = new BReplyCommand();
			command.execute(request, response);
			viewPage = "list.do";
		}
		
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);//해당 jsp페이지 경로를 디스패쳐 객체에 담아서 포워딩해준다. 
		dispatcher.forward(request, response);//해당 jsp페이지로 화면전환이 이루어짐 
		
		//프론트 컨트롤러의 역할은 사용자의 요청을 한꺼번에 받아서 위와같이 분기 시켜주는것이다. 
		
	}

}
