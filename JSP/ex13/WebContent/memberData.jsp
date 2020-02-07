<%@ page import ="java.sql.DriverManager" %>
<%@ page import ="java.sql.ResultSet" %>
<%@ page import ="java.sql.Statement" %>
<%@ page import ="java.sql.Connection" %>
<%@ page import ="java.sql.SQLException" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%!
	 	Connection connection;
		Statement statement;
		ResultSet resultSet;
		
		String driver = "oracle.jdbc.driver.OracleDriver";//ojdbc6.jar파일을 WebContent-> WEB-INF -> lib 폴더에 넣어줘야 드라이버 연결이된다.  
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		String uid = "scott";
		String upw = "tiger";
		String query = "select * from member";
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
			try{
			Class.forName(driver);//oracle.jdbc.driver.OracleDriver
			}catch(ClassNotFoundException e){
				System.out.println(e);
			}
			
			try{
				connection = DriverManager.getConnection(url,uid,upw);//jdbc:oracle:thin:@localhost:1521:xe
			}catch(SQLException e){
				System.out.println(e);
			}
			statement = connection.createStatement();
			resultSet = statement.executeQuery(query);//select * from member
			
			while(resultSet.next()){
				String id = resultSet.getString("id");
				String pw = resultSet.getString("pw");
				String name = resultSet.getString("name");
				String phone = resultSet.getString("phone");
				
				out.println("아이디 : " + id + ", 비밀번호 : " + pw + ", 이름 : " + name + ", 전화번호 : " + phone + "<br>"); 
			}
		}catch(Exception e){
				
		}finally{
			try{//데이터를 다 처리 했는데 연결시켜놓으면 자원이 낭비되기 때문에 끊어준다.(자원해제)
			 if(resultSet != null) resultSet.close();
			 if(statement != null) statement.close();
			 if(connection != null) connection.close();
			}catch(Exception e){
			}
		}
	%>
</body>
</html>