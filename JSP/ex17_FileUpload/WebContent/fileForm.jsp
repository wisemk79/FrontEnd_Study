<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>

	<form action="fileFormOk.jsp" method="post" enctype="multipart/form-data"><!-- enctype="multipart/form-data" <-�̷��� ����� ������ ���������� ÷�ΰ� �� �� �ִ�.  -->
		���� : <input type="file" name="file"><br />
		<input type="submit" value="File Upload">
	</form>

</body>
</html>