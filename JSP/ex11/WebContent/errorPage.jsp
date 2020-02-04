<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage = "true" %><!-- 이건 에러페이지역할을한다고 표시하는것. true로 안해주는경우 exception 객체의 기능을 사용할 수 없다. -->
<%@ response.setStatus(200); %>	 <!-- 현재 에러페이지가 뜰 수 있도록 해주기위해 스테이터스를 설정함 스테이터스 값이 
									에러를 뜻하는 500이 설정되면 해당 에러페이지가 뜨기때문에 현재 에러페이지가 뜨도록 200을 설정해준다. -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	에러발생<br/>
	<%= exception.getMessage() %>	
</body>
</html>