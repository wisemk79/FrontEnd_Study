<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<% if(session.getAttribute("ValidMem") != null) { %><!-- ���ǿ� ��ȿ�� ���̵� �ִٸ� ���� �������� ������, ȸ�����Խÿ��� �α������� �ʾұ� ������ �α��� �������� �״�� �ӹ��Եȴ�. -->
	<jsp:forward page="main.jsp"></jsp:forward>
<% } %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<form action="loginOk.jsp" method="post">
		���̵� : <input type="text" name="id" value="<% if(session.getAttribute("id") != null) out.println(session.getAttribute("id")); %>"> <br /><!-- ���ǿ� id�� �ִٸ� id���� �־��ش�.  -->
		��й�ȣ : <input type="password" name="pw"><br />
		<input type="submit" value="�α���"> &nbsp;&nbsp; <input type="button" value="ȸ������" onclick="javascript:window.location='join.jsp'">
	</form>
</body>
</html>