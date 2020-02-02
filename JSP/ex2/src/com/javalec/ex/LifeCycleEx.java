package com.javalec.ex;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LifeCycleEx
 */
@WebServlet("/LifeCycleEx")
public class LifeCycleEx extends HttpServlet{
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LifeCycleEx() {
        super();
    }
    
    
    public void init() throws ServletException{
    	System.out.println("init");
    }
    
    
    
    public void destroy() {
    	System.out.println("destroy");
    }
    
    

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doGet");
	}//doGet 메소드는 페이지를 연후(객체가 생성된 후) 새로고침할 때마다 실행된다. 반면, init메소드는 최초 객체가 생성될 때만 실행되고
	// 	이후 새로고침을 하게되면 init메소드가 실행되지 않게된다.

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doPost");
	}

	@PostConstruct  //<--어노테이션을 해줘야 작동하며 밑의 메소드이름은 의미로 지정해줘도된다.
	private void initPostConstruct() {//PostConstruct는 init이 호출되기전 선처리해주는것이다.
		System.out.println("initPostConstruct");
	}
	
	@PreDestroy //<--어노테이션을 해줘야 작동하며 밑의 메소드이름은 의미로 지정해줘도된다.
	private void destroyPreDestroy() {//PreDestroy는 destroy가 호출된 후에 처리해주는 것을 의미한다.
		System.out.println("destroyPreDestroy");
	}
	
}
