<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<% String str = request.getParameter("String");
	   String num = request.getParameter("Num");

		for(int i = 0; i < Integer.parseInt(num); i++){
		%> 
		<h3><%= str %></h3>
		<%} %>
</body>
</html>