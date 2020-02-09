<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<c:set var="vatName" value="varValue"/><!-- c:set �������� �̸��� ���� �����ش�. -->
	vatName : <c:out value="${vatName}"/><!-- s:out ��½����ִ� ����  -->
	<br />
	<c:remove var="vatName"/><!-- c:remove ������ ���� �������ִ� �� -->
	vatName : <c:out value="${vatName}"/></h3>
	
	<hr />
	
	<c:catch var="error"> <!-- try catch���� ��� �������� error�� ���� -->
		<%=2/0%>
	</c:catch>
	<br />
	<c:out value="${error}"/><!-- ������ ���  -->
	
	<hr />

	<c:if test="${1+2==3}"><!-- c:if  if -->
		1 + 2 = 3 <!-- <- ���� ������ ���ٸ�. 1+2=3�� ����Ѵ�.  -->
	</c:if>
	
	<c:if test="${1+2!=3}">
		1 + 2 != 3
	</c:if>
	
	<hr />

	<c:forEach var="fEach" begin="0" end="30" step="3"><!-- c:forEach�� for���̴�.  0~30������ ������ 3�� �����Ѵ�. �������� fEach   -->
		${fEach}
	</c:forEach>

</body>
</html>