<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<jsp:useBean id="cb" class="calc.CalcBean" scope="page" />
<jsp:setProperty property="*" name="cb" />
<% cb.calculate(); %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>요청을 하는 페이지 calc.jsp + calResult.jsp</title>
</head>
<body>
<center>
   <h3>간단한 계산기</h3><hr>
   <form name="form1" method="post">
      <input type ="text" name="num1" width="200" size="5">
         <select name="operator">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
         </select>
      <input type ="text" name="num2" width="200" size="5"><p>
      <input type ="submit" value="계산">
      <input type ="reset" value="다시입력">
   </form><hr>
계산결과(자바빈즈) : <%= cb.getResult() %><br>
계산결과(액션태그) : <jsp:getProperty property="result" name="cb"/>

</center>

</body>
</html>