<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<a href="insert.do">insert</a><!-- .do 로 맵핑되어있는 서블릿을 찾아가는데 다만 .do 앞에있는 insert에 해당하는 역할을 수행한다.  -->
	<hr /><!-- 위의 do는 insert를 찾아가고 아래의 것은 update를 찾아가며  -->
	<a href="http://localhost:8181<%=request.getContextPath()%>/update.do">update</a><!-- 여기서 request.getContextPath()는 jsp_25_2_ex1_frontex를 의미한다. -->
	<hr />
	<a href="http://localhost:8181/jsp_25_2_ex1_frontex/select.do">select</a>
	<hr /><!-- 바로위의 do는 select를 찾아가고 아래는 delete를 찾아간다.  -->
	<a href="<%=request.getContextPath()%>/delete.do">delete</a>

</body>
</html>