<%@page import="com.javalec.ex.MemberDto"%>
<%@page import="com.javalec.ex.MemberDao"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	request.setCharacterEncoding("EUC-KR");

	String id = request.getParameter("id");//아이디와 패스워드를 받는다 .
	String pw = request.getParameter("pw");
	
	MemberDao dao = MemberDao.getInstance();// 싱글턴 객체 dao 인스턴스를 가져온다. 
	int checkNum = dao.userCheck(id, pw);//dao user를 체크한다. 
	if(checkNum == -1) {//없는 아이디인 경우 
%>
		<script language="javascript">
			alert("아이디가 존재하지 않습니다.");
			history.go(-1);
		</script>
<%
	} else if(checkNum == 0) {//비밀번호가 틀린 경우 
%>
		<script language="javascript">
			alert("비밀번호가 틀립니다.");
			history.go(-1);//다시로그인하도록 로그인 페이지로 
		</script>
<%
	} else if(checkNum == 1) {//로그인이 정상적으로 됬을 경우 
		MemberDto dto = dao.getMember(id);//정보를 가져오는 것 
		
		if(dto == null) {//dto 객체에서 정보를 못가져온경우 
%>
		<script language="javascript">
			alert("존재하지 않는 회원 입니다.");
			history.go(-1);
		</script>
<%
		} else {
			String name = dto.getName();
			session.setAttribute("id", id);//세션에 아이디를 넣는다. 
			session.setAttribute("name", name);
			session.setAttribute("ValidMem", "yes");//유효한 회원이라는 의미 ValidMem을 yes로 지정 
			response.sendRedirect("main.jsp");//main.jsp로 이동한다. 
		}
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

</body>
</html>