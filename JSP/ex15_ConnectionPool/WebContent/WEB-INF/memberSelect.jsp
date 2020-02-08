<%@ page import = "com.javalec.ex.MemberDto" %>
<%@ page import = "java.util.ArrayList" %>
<%@ page import = "com.javalec.ex.MemberDao" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		MemberDao memberDAO = new MemberDao();// dao의 객체를 생성 
		ArrayList<MemberDto> dtos = memberDAO.memberSelect();//
		
		for(int i = 0; i < dtos.size(); i++){//어레이리스트 크기만큼 포문을 돌린다.
			MemberDto dto = dtos.get(i);//dto 를 가져온다 
			String name = dto.getName();//이름을 가져온다. 
			String id = dto.getId();
			String pw = dto.getPw();
			String phone = dto.getPhone1() + " - " + dto.getPhone2() + " - " + dto.getPhone3();
			String gender = dto.getGender();
			
			out.println("이름 : " + name + ", 아이디 : " + id + ", 비밀번호 : " + pw + ", 성별 : " + gender + "<br/>");
			
		}
	%>
</body>
</html>