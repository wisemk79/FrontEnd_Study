package com.javalec.ex;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ContextListenerEx
 */
@WebListener
public class ContextListenerEx extends HttpServlet implements ServletContextListener {

	private static final long serialVersionUID = 1L;

	public ContextListenerEx() {//웹어플리케이션의 생명주기를 감시하는 리스너, 해당 메소드의 웹 어플리케이션의 시작과 종료시 호출된다.
        super();				//contextInitialized(),contextDestroyed()
        // TODO Auto-generated constructor stub
    }

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		System.out.println("contextInitialized");//<--doget보다 먼저시작
	}
	
	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		System.out.println("contextDestroyed");//<-destroy실행이후 시작
	}
	
	
	@PostConstruct  //<--어노테이션을 해줘야 작동하며 밑의 메소드이름은 의미로 지정해줘도된다.
	private void initPostConstruct() {//PostConstruct는 init이 호출되기전 선처리해주는것이다.
		System.out.println("initPostConstruct");
	}
	
	@PreDestroy //<--어노테이션을 해줘야 작동하며 밑의 메소드이름은 의미로 지정해줘도된다.
	private void destroyPreDestroy() {//PreDestroy는 destroy가 호출된 후에 처리해주는 것을 의미한다.
		System.out.println("destroyPreDestroy");
	}
	
	
    public void init() throws ServletException{
    	System.out.println("init");
    }
    
    public void destroy() {
    	System.out.println("destroy");
    }
	
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doGet"); 
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doPost");
	}





}
