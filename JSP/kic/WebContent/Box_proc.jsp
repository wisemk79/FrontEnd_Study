<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<% 
	   String row = request.getParameter("tr");
	   String col = request.getParameter("td");
	%>
	<table border = "1">
	<% for(int i = 0; i < Integer.parseInt(row); i++){%>
			<tr></tr>
		<%for(int j = 0; j < Integer.parseInt(col); j++){%>
		<td height = "50" width = "100"></td>
		<%}
		}
		%>
	</table>
	
	<a href = "Box.html">다시 입력하기</a>
	

</body>
</html>