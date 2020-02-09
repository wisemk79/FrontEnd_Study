<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
	
	<%
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
	%>
	
	아이디 : <%= id %> <br />
	비밀번호 : <%= pw %>
	
	<hr />
	
	아이디 : ${ param.id } <br /><!-- 위에서 가져왔던 아이디가 그대로 출력됨(표기방법이다른것)   -->
	비밀번호 : ${ param.pw } <br />
	아이디 : ${ param["id"] } <br /><!-- 위에서 가져왔던 아이디가 그대로 출력됨(표기방법이 다른것)   -->
	비밀번호 : ${ param["pw"] }
	
	<hr />
	
	applicationScope : ${ applicationScope.application_name }<br /><!-- 어플리케이션의 벨류가 찍힘  -->
	sessionScope : ${ sessionScope.session_name }<br /><!-- 세션의 벨류가 찍힌다.  -->
	pageScope : ${ pageScope.page_name }<br />
	requestScope : ${ requestScope.request_name }
	
	<hr />
	
	context 초기화 파라미터<br /><!-- lib - web.xml에 context-param을 지정해 놓았다. -->
	${ initParam.con_name } <br />
	${ initParam.con_id } <br />
	${ initParam.con_pw } <br />
</body>
</html>