<%@page import="java.sql.Timestamp"%>
<%@page import="com.javalec.ex.*"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<% request.setCharacterEncoding("EUC-KR"); %>
<jsp:useBean id="dto" class="com.javalec.ex.MemberDto"/><!-- �ڹٺ��� ����ϰڴ�. memberDto �� �����͵�  -->
<jsp:setProperty name="dto" property="*" /><!-- ���� dto�� property�� set�ϰڴ�. property�� *�� ����༭ dto object�� �Ӽ��� ��������ϰ� join form�� �ִ� input �±� name��  ��������  �ڵ������� �Է��� �ǰԲ��ߴ�. -->
<%
		dto.setrDate(new Timestamp(System.currentTimeMillis()));// setrDate ȸ�������� ��¥�� �ð��� �����ϴ� setter ȸ���� �Է��ϴ°��� �ƴ� �ý����� �˾Ƽ� �Է������ �Ѵ�.  new Timestamp(System.currentTimeMillis()) ���� �־��ش�. 
		MemberDao dao = MemberDao.getInstance();// ��ü�� �������� �ʰ� �ν��Ͻ��� �����´� �̱��� ����<-- dao���Ͽ� ������. 
		if(dao.confirmId(dto.getId()) == MemberDao.MEMBER_EXISTENT) {//dao.confirmId�̶�� �޼ҵ忡 �츮�� ����� ���� dto.getId()<-- ����ڰ� �Է��� ���̵�  ��ü�� �����´�.
										//���� ������� 1�̶�� ���̵� �����մϴٷ� ���°�. 
%>
		<script language="javascript">
			alert("���̵� �̹� ���� �մϴ�.");
			history.back();//�������� �ѹ� �ڷε����� �ٽ� ȸ������ �������� ���� 
		</script>
<%
		} else {
			int ri = dao.insertMember(dto);//dao �����͸� �������� ��ü�� ���� insertmember ȸ������ ������ �����ͺ��̽��� �ְڴ�. 
			if(ri == MemberDao.MEMBER_JOIN_SUCCESS) {//MEMBER_JOIN_SUCCESS�� 1�� ������ 
				session.setAttribute("id", dto.getId());// �����ѻ���� ���̵� ���� �Ӽ����ٰ� ������ �Ѵ�. 
%>
			<script language="javascript">
				alert("ȸ�������� ���� �մϴ�.");
				document.location.href="login.jsp";//���������� �α������� �����Ѵ�. 
			</script>
<%
			} else {
%>
			<script language="javascript">
				alert("ȸ�����Կ� �����߽��ϴ�.");
				document.location.href="login.jsp";
			</script>
<%
			}
		}
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
	
</body>
</html>