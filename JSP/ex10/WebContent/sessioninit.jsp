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
		session.setAttribute("mySessionName", "mySessionValue");//세션의 속성을 설정한다.
		session.setAttribute("myNum", 12345);
	%>
	
	<a href = "sessionget.jsp">session get</a>
</body>
</html>