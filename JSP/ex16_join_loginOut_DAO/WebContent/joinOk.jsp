<%@page import="java.sql.Timestamp"%>
<%@page import="com.javalec.ex.*"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<% request.setCharacterEncoding("EUC-KR"); %>
<jsp:useBean id="dto" class="com.javalec.ex.MemberDto"/><!-- 자바빈을 사용하겠다. memberDto 의 데이터들  -->
<jsp:setProperty name="dto" property="*" /><!-- 위의 dto의 property를 set하겠다. property에 *을 찍어줘서 dto object의 속성의 변수명들하고 join form에 있는 input 태그 name이  같은곳에  자동적으로 입력이 되게끔했다. -->
<%
		dto.setrDate(new Timestamp(System.currentTimeMillis()));// setrDate 회원가입한 날짜와 시간을 저장하는 setter 회원이 입력하는것이 아닌 시스템이 알아서 입력해줘야 한다.  new Timestamp(System.currentTimeMillis()) 값을 넣어준다. 
		MemberDao dao = MemberDao.getInstance();// 객체를 생성하지 않고 인스턴스를 가져온다 싱글턴 패턴<-- dao파일에 가보자. 
		if(dao.confirmId(dto.getId()) == MemberDao.MEMBER_EXISTENT) {//dao.confirmId이라는 메소드에 우리가 만들어 놓은 dto.getId()<-- 사용자가 입력한 아이디  객체를 가져온다.
										//만약 멤버값이 1이라면 아이디가 존재합니다로 가는것. 
%>
		<script language="javascript">
			alert("아이디가 이미 존재 합니다.");
			history.back();//브라우저를 한번 뒤로돌려서 다시 회원가입 페이지로 보냄 
		</script>
<%
		} else {
			int ri = dao.insertMember(dto);//dao 데이터를 엑세스한 객체로 부터 insertmember 회원가입 정보를 데이터베이스에 넣겠다. 
			if(ri == MemberDao.MEMBER_JOIN_SUCCESS) {//MEMBER_JOIN_SUCCESS가 1과 같으면 
				session.setAttribute("id", dto.getId());// 가입한사람의 아이디를 세션 속성에다가 저장을 한다. 
%>
			<script language="javascript">
				alert("회원가입을 축하 합니다.");
				document.location.href="login.jsp";//페이지에서 로그인으로 유도한다. 
			</script>
<%
			} else {
%>
			<script language="javascript">
				alert("회원가입에 실패했습니다.");
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