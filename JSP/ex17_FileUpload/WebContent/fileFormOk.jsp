<%@page import="java.util.Enumeration"%>
<%@page import="com.oreilly.servlet.multipart.DefaultFileRenamePolicy"%>
<%@page import="com.oreilly.servlet.MultipartRequest"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
	String path = request.getRealPath("fileFolder");//getRealPath <-�������� �н��� �����Ѵ�. 

	int size = 1024 * 1024 * 10; //10M  
	String file = "";//���ε��� ���� �̸� 
	String oriFile = "";//�̹� �� ���� �̸��� ������ ������ �ִ� ��� abc(1) <-�̷������� �����̸��� ����Ǳ����̸� 
	
	try{//���� ������ ���ε��ϴ� ���� 
		MultipartRequest multi = new MultipartRequest(request, path, size, "EUC-KR", new DefaultFileRenamePolicy());
		//MultipartRequest ��� Ŭ���� �̿�  path ������ ������ ����� �н�, size ����� ���� �뷮/ new DefaultFileRenamePolicy() <--�̰��� �������ָ� ���� ���ϸ��� ������ ���ö� ���ϸ� �ڿ� abc(1)<--�̷������� ������
		Enumeration files = multi.getFileNames();//��Ƽ��Ʈ������Ʈ�� ���� �����̸��� �����´�. 
		String str = (String)files.nextElement();//�� �����̸��� ��Ʈ������ ���� 
		
		file = multi.getFilesystemName(str);//���ϸ��� �ߺ��ɽ� ���� �̸������Ѵ�.
		oriFile = multi.getOriginalFileName(str);//���� ���� �̸��� ���ϰ� 
		//����� ������ ��Ĺ ������  wtpwebapps ����� ���� ������ ����ǰ� �ȴ�. 
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