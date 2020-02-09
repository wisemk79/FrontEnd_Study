package com.javalec.ex;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MembersAllService implements Service {
	
	public MembersAllService() {
		// TODO Auto-generated constructor stub
	}

	@Override //<-- Service 인터페이스에서 오버라이드된 객체   memberdto를 사용하는 어레이리스트를 반환형으로 해줌 
	public ArrayList<MemberDto> execute(HttpServletRequest request, HttpServletResponse response) {//이것의 execute를 이용하여 dao에 접근하여 메소드 호출 
		// TODO Auto-generated method stub
		
		MemberDao dao = MemberDao.getInstance();//dao에 접근하여 
		return dao.membersAll();// dao memeversall 메소드 호출 
	}

}
