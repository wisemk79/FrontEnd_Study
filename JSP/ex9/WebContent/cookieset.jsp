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
		Cookie cookie = new Cookie("cookieN", "cookieV");//앞이 쿠키의 이름이고 뒤가 쿠키의 value값이 된다. 
		cookie.setMaxAge(60*60);  //60초*60 1시간  쿠키를 유지한다.
		response.addCookie(cookie);//응답할때 쿠키 객체를 생성한다. 
	%>
	
	<a href="cookieget.jsp">cookie get</a>
</body>
</html>