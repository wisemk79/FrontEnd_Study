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
	
	���̵� : <%= id %> <br />
	��й�ȣ : <%= pw %>
	
	<hr />
	
	���̵� : ${ param.id } <br /><!-- ������ �����Դ� ���̵� �״�� ��µ�(ǥ�����̴ٸ���)   -->
	��й�ȣ : ${ param.pw } <br />
	���̵� : ${ param["id"] } <br /><!-- ������ �����Դ� ���̵� �״�� ��µ�(ǥ������ �ٸ���)   -->
	��й�ȣ : ${ param["pw"] }
	
	<hr />
	
	applicationScope : ${ applicationScope.application_name }<br /><!-- ���ø����̼��� ������ ����  -->
	sessionScope : ${ sessionScope.session_name }<br /><!-- ������ ������ ������.  -->
	pageScope : ${ pageScope.page_name }<br />
	requestScope : ${ requestScope.request_name }
	
	<hr />
	
	context �ʱ�ȭ �Ķ����<br /><!-- lib - web.xml�� context-param�� ������ ���Ҵ�. -->
	${ initParam.con_name } <br />
	${ initParam.con_id } <br />
	${ initParam.con_pw } <br />
</body>
</html>