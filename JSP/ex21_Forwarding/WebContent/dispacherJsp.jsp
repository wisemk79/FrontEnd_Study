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
			//dispatcher.forward(request, response);<--�̷������� �ݴ�� ������Ʈ ��ü�� �������� �����Ҽ��ִ�.
		%>       -->	

</body>
</html>