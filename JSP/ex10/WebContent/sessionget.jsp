<%@ page import = "java.util.Enumeration"  %>
<%@ page import = "javax.servlet.http.HttpSession" %>
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
		Object obj1 = session.getAttribute("mySessionName");//getAttribute의 반환값이 Object이다.  <-세션의 특정 속성 이름 값을 가져온다.
		String mySessionName = (String)obj1;
		out.println(mySessionName + "<br/>");
		
		Object obj2 = session.getAttribute("myNum");
		Integer myNum = (Integer)obj2;
		out.println(myNum + "<br/>");
		
		out.println("****************** <br/>");
		
		String sName;
		String sValue;
		Enumeration enumeration = session.getAttributeNames();//세션의 모든 네임을 얻어온다.
		while(enumeration.hasMoreElements()){//해당 세션에 값이 있는가.
			sName = enumeration.nextElement().toString();
			sValue = session.getAttribute(sName).toString();
			out.println("sName : " + sName + "<br/>");
			out.println("sName : " + sValue + "<br/>");
		}	
		
		out.println("******************* <br/>");
		
		String sessionID = session.getId();// 세션을 생성할때마다 컨테이너가 자동적으로 고유한 ID를 생성한다.
		out.println("sessionID" + sessionID + "<br/>");
		int sessionInter = session.getMaxInactiveInterval();//유효시간 
		out.println("sessionInter : " + sessionInter + "<br/>");
		
		out.println("******************** <br/>");
		
		session.removeAttribute("mySessionName");//세션의 데이터값만 삭제한다.
		Enumeration enumeration1 = session.getAttributeNames();//세션의 모든 네임을 얻어온다.
		while(enumeration1.hasMoreElements()){
			sName = enumeration1.nextElement().toString();
			sValue = session.getAttribute(sName).toString();
			out.println("sName : " + sName + "<br/>");
			out.println("sName : " + sValue + "<br/>");
		}	
		
		
		out.println("******************** <br/>");
		
		session.invalidate();//세션의 모든데이터를 삭제한다.
		if(request.isRequestedSessionIdValid()){//유효한세션이 있으면.
			out.println("session valid");
		}else{
			out.println("session invalid");
		}
		
	%>
</body>
</html>