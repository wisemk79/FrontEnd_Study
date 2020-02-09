<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<jsp:useBean id="member" class="com.javalec.ex.MemberInfo" scope="page" />
<jsp:setProperty name="member" property="name" value="홍길동"/><!-- setproperty 를 해주면 값을 넣어준다. -->
<jsp:setProperty name="member" property="id" value="abc"/>
<jsp:setProperty name="member" property="pw" value="123"/>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
	이름 : <jsp:getProperty name="member" property="name"/><br /><!-- getproperty를하면 가져온다.  -->
	아이디 : <jsp:getProperty name="member" property="id"/><br />
	비밀번호 : <jsp:getProperty name="member" property="pw"/><br />
	
	<hr />
	<!-- 밑의 방법이 출력할 때  간단하다 . -->
	이름 : ${member.name }<br />
	아이디 : ${member.id }<br />
	비밀번호 : ${member.pw }<br />
	
</body>
</html>