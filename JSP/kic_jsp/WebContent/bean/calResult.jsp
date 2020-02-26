<%@page import="calc.CalcBean"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>요청을 받아서 처리해주는 페이지</title>
</head>
<body>


<jsp:useBean id="cb" class="calc.CalcBean" scope="page" />
<jsp:setProperty property="*" name="cb" />
<% cb.calculate();%>

계산결과(자바빈즈) : <%= cb.getResult() %><br>
계산결과(액션태그) : <jsp:getProperty property="result" name="cb"/>
</body>
</html>