package com.javalec.ex.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface BCommand {//인터페이스이다. 
	
	void execute(HttpServletRequest request, HttpServletResponse response);//실행하라는 메소드가 있고 리스폰스와 리퀘스트 객체를 받고있다. 
	
}