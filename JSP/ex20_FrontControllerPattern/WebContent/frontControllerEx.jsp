<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<a href="insert.do">insert</a><!-- .do �� ���εǾ��ִ� ������ ã�ư��µ� �ٸ� .do �տ��ִ� insert�� �ش��ϴ� ������ �����Ѵ�.  -->
	<hr /><!-- ���� do�� insert�� ã�ư��� �Ʒ��� ���� update�� ã�ư���  -->
	<a href="http://localhost:8181<%=request.getContextPath()%>/update.do">update</a><!-- ���⼭ request.getContextPath()�� jsp_25_2_ex1_frontex�� �ǹ��Ѵ�. -->
	<hr />
	<a href="http://localhost:8181/jsp_25_2_ex1_frontex/select.do">select</a>
	<hr /><!-- �ٷ����� do�� select�� ã�ư��� �Ʒ��� delete�� ã�ư���.  -->
	<a href="<%=request.getContextPath()%>/delete.do">delete</a>

</body>
</html>