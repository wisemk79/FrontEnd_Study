<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

		dispacherJsp.jsp
		<hr />
		
		id : <%= request.getAttribute("id") %> <br />
		pw : <%= request.getAttribute("pw") %>
		
		
		
<!-- 	<%
			//RequestDispatcher dispatcher = request.getRequestDispatcher("");
			//dispatcher.forward(request, response);<--이런식으로 반대로 리퀘스트 객체를 서블릿으로 전달할수있다.
		%>       -->	

</body>
</html>