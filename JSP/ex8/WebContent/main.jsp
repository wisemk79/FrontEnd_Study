<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1> main.jsp 페이지입니다. </h1>
	
	<jsp:forward page = "sub.jsp"/><!--url은 main.jsp로  변하지 않는다. 하지만 액션태그를 사용했기 때문에 jsp:forward 그 페이지의 내용이 보이게된다.  -->
	<!--forward는 지정한 페이지로 넘어가고 끝난다. -->
</body>
</html>