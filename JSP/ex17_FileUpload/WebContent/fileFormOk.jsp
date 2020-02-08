<%@page import="java.util.Enumeration"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	String path = request.getRealPath("fileFolder");//getRealPath <-파일폴더 패스를 지정한다. 

	int size = 1024 * 1024 * 10; //10M  
	String file = "";//업로드한 파일 이름 
	String oriFile = "";//이미 그 파일 이름과 동일한 파일이 있는 경우 abc(1) <-이런식으로 파일이름이 변경되기전이름 
	
	try{//밑은 파일을 업로드하는 과정 
		MultipartRequest multi = new MultipartRequest(request, path, size, "EUC-KR", new DefaultFileRenamePolicy());
		//MultipartRequest 라는 클래스 이용  path 실제로 파일이 저장될 패스, size 저장될 파일 용량/ new DefaultFileRenamePolicy() <--이것을 지정해주면 같은 파일명의 파일이 들어올때 파일명 뒤에 abc(1)<--이런식으로 생성해
		Enumeration files = multi.getFileNames();//멀티파트리퀘스트로 부터 파일이름을 가져온다. 
		String str = (String)files.nextElement();//그 파일이름을 스트링으로 저장 
		
		file = multi.getFilesystemName(str);//파일명이 중복될시 파일 이름을구한다.
		oriFile = multi.getOriginalFileName(str);//원래 파일 이름을 구하고 
		//저장된 파일은 톰캣 서버의  wtpwebapps 경로의 파일 폴더에 저장되게 된다. 
	} catch (Exception e) {
		e.printStackTrace();
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
 	file upload success!
</body>
</html>