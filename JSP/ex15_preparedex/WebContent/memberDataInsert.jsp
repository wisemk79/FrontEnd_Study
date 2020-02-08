<%@ page import = "java.sql.PreparedStatement" %>
<%@ page import = "java.sql.DriverManager" %>
<%@ page import = "java.sql.ResultSet" %>
<%@ page import = "java.sql.Connection" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%!
    	Connection connection;
    	PreparedStatement preparedStatement;
    	ResultSet resultSet;
    	
  		String driver = "oracle.jdbc.driver.OracleDriver";
  		String url = "jdbc:oracle:thin:@localhost:1521:xe";
  		String uid = "scott";
  		String upw = "tiger";
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	try{
		Class.forName(driver);//드라이버 로드 
		connection = DriverManager.getConnection(url, uid, upw);
		int n;
		String query = "insert into memberforpre(id, pw, name, phone) values(?,?,?,?)";
		preparedStatement = connection.prepareStatement(query);
		
		preparedStatement.setString(1, "abc");
		preparedStatement.setString(2, "123");
		preparedStatement.setString(3, "HongGilDong");
		preparedStatement.setString(4, "010-1234-5678");
		n = preparedStatement.executeUpdate();
		
		preparedStatement.setString(1, "def");
		preparedStatement.setString(2, "456");
		preparedStatement.setString(3, "HongGilJa");
		preparedStatement.setString(4, "010-9012-3456");
		n = preparedStatement.executeUpdate();
		
		preparedStatement.setString(1, "ghi");
		preparedStatement.setString(2, "789");
		preparedStatement.setString(3, "HongGilSoon");
		preparedStatement.setString(4, "010-7890-1234");
		n = preparedStatement.executeUpdate();
		
		preparedStatement.setString(1, "AAA");
		preparedStatement.setString(2, "111");
		preparedStatement.setString(3, "LeeGilDong");
		preparedStatement.setString(4, "010-1234-1111");
		n = preparedStatement.executeUpdate();
		
		
		if(n == 1){
			out.println("insert success");
		}else{
			out.println("insert fail");
		}
		
		
	}catch(Exception e){
	}
	%>
	<br/>
	<a href = "memberDateView.jsp">회원정보 보기</a>
</body>
</html>