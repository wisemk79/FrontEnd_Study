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

	<c:set var="vatName" value="varValue"/><!-- c:set 변수명의 이름과 값을 정해준다. -->
	vatName : <c:out value="${vatName}"/><!-- s:out 출력시켜주는 구문  -->
	<br />
	<c:remove var="vatName"/><!-- c:remove 변수의 값을 삭제해주는 태 -->
	vatName : <c:out value="${vatName}"/></h3>
	
	<hr />
	
	<c:catch var="error"> <!-- try catch문과 비슷 변수명을 error로 지정 -->
		<%=2/0%>
	</c:catch>
	<br />
	<c:out value="${error}"/><!-- 에러를 출력  -->
	
	<hr />

	<c:if test="${1+2==3}"><!-- c:if  if -->
		1 + 2 = 3 <!-- <- 위의 조건이 같다면. 1+2=3을 출력한다.  -->
	</c:if>
	
	<c:if test="${1+2!=3}">
		1 + 2 != 3
	</c:if>
	
	<hr />

	<c:forEach var="fEach" begin="0" end="30" step="3"><!-- c:forEach는 for문이다.  0~30까지의 범위로 3씩 증가한다. 변수명은 fEach   -->
		${fEach}
	</c:forEach>

</body>
</html>