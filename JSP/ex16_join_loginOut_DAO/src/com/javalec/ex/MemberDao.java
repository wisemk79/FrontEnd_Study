package com.javalec.ex;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class MemberDao {

	public static final int MEMBER_NONEXISTENT  = 0;
	public static final int MEMBER_EXISTENT = 1;//상수는 어디서나 쓰일 수 있도록, 문구만봐도 뭔지 알수있도록 public static final로 사용 
	public static final int MEMBER_JOIN_FAIL = 0;
	public static final int MEMBER_JOIN_SUCCESS = 1;
	public static final int MEMBER_LOGIN_PW_NO_GOOD = 0;
	public static final int MEMBER_LOGIN_SUCCESS = 1;
	public static final int MEMBER_LOGIN_IS_NOT = -1;
	
	private static MemberDao instance = new MemberDao();//자신이 자신의 클래스를 생성하여 그것을 참조하고있는 변수가 instance이다. 
	//싱글턴 패턴의 특징은 클래스로부터 객체를 바로 가져올 수가있다. 이렇게만들면 이 객체가 유일하게 하나만 만들어진다. 그 하나만 만들어진 객체를 모든 곳에서 다같이 공유해서 쓸 수가 있다.
	
	private MemberDao() {//생성자가 private 이다. 생성자에 접근을 할 수 없다. 그대신에 static 을 하나지정해주는데 그것이 밑에 있는 getInstance 메소드이다.
	}
	
	public static MemberDao getInstance(){//static으로 바로 접근하여 인스턴스를 여기서 리턴해준다. 
		return instance;
	}
	
	public int insertMember(MemberDto dto) {
		int ri = 0;
		
		Connection connection = null;//연결객체 
		PreparedStatement pstmt = null;//
		String query = "insert into members values (?,?,?,?,?,?)";//prestatement 문법으로 데이터를 넣어주도록 쿼리 작
		
		try {
			connection = getConnection();//커넥션 객체 구하고 
			pstmt = connection.prepareStatement(query);// prestatement 객체를 구한다.
			pstmt.setString(1, dto.getId());// dto를 만들때 *로 다 입력을 해줬다 joinOk.jsp의 jsp:useBean과 jsp:property 참조할것 시스템시간은 따로 jsp태그에 dto.setrDate로 입력해주었다.
			pstmt.setString(2, dto.getPw());//위 처럼 해서 정보를 빼와서(getpw,getId 등등) 데이터베이스에 입력을해준다. pstmt.setString
			pstmt.setString(3, dto.getName());
			pstmt.setString(4, dto.geteMail());
			pstmt.setTimestamp(5, dto.getrDate());
			pstmt.setString(6, dto.getAddress());
			pstmt.executeUpdate();//위의로직을 실행하면 insert문에 다 들어갔을 것이고 이것을 DB에 업데이트 해준다.
			//	회원가입정보를 데이터베이스에 넣을 때는 업데이트해줬으니까 반환된게 resultSet 객체가 없으니까 정수형으로 ri를 받는다. 
			ri = MemberDao.MEMBER_JOIN_SUCCESS;//1을 ri에 대입해준다. <--이것을 joinOk.jsp에 돌려준다.
		} catch (Exception e) {//위의 로직이 수행되지 않는다면 에러가 뜨고밑에 ri까지 로직 수행되면서 ri = 0이 되게된다.
			e.printStackTrace();
		} finally {
			try {
				if(pstmt != null) pstmt.close();
				if(connection != null) connection.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return ri;
	}
	
	public int confirmId(String id) {
		int ri = 0;
		
		Connection connection = null;
		PreparedStatement pstmt = null;
		ResultSet set = null;
		String query = "select id from members where id = ?";
		
		try {
			connection = getConnection();
			pstmt = connection.prepareStatement(query);
			pstmt.setString(1, id);//사용자가 폼에다가 입력한 아이디
			set = pstmt.executeQuery();
			if(set.next()){//이미 누가 쓰고 있는 아이디라면 true가 반환된다.
				ri = MemberDao.MEMBER_EXISTENT;//눌러서 가보면 이것은 상수이다. <--1 <--이미 있는 아이디이기 떄문에 회원가입이 되지 않는다.
			} else {
				ri = MemberDao.MEMBER_NONEXISTENT;//누가 쓰고있는 아이디가 아니면 <--0 <--회원가입이 정상적으로 이루어진다.
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				set.close();
				pstmt.close();
				connection.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return ri;
	}
	
	public int userCheck( String id, String pw) {//사용자가 입력한 아이디와 패스워드를 이용 
		int ri = 0;
		String dbPw;
		
		Connection connection = null;//커넥션 객체 
		PreparedStatement pstmt = null;//prestatement객체 
		ResultSet set = null;// 명령에 대한 반환값. 반환해주는 값은 테이블을 보시면서 해야 이해가 빠를듯..
		String query = "select pw from members where id = ?";//멤버즈 테이블에서 비밀번호를 가져온다. 
		
		try {
			connection = getConnection();
			pstmt = connection.prepareStatement(query);
			pstmt.setString(1, id);
			set = pstmt.executeQuery();//DB에 명령하는 것 
			
			if(set.next()) {
				dbPw = set.getString("pw");//pw를 가져와서 담고 
				if(dbPw.equals(pw)) {//그것이 pw와 같다
					ri = MemberDao.MEMBER_LOGIN_SUCCESS;				// 로그인 Ok
				} else {
					ri = MemberDao.MEMBER_LOGIN_PW_NO_GOOD;		// 비번 X
				}
			} else {
				ri = MemberDao.MEMBER_LOGIN_IS_NOT;		// 회원이 아니다.	
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				set.close();
				pstmt.close();
				connection.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		return ri;
	}
	
	public MemberDto getMember(String id) {
		Connection connection = null;
		PreparedStatement pstmt = null;
		ResultSet set = null;
		String query = "select * from members where id = ?";
		MemberDto dto = null;
		
		try {
			connection = getConnection();
			pstmt = connection.prepareStatement(query);
			pstmt.setString(1, id);
			set = pstmt.executeQuery();
			
			if(set.next()) {
				dto = new MemberDto();
				dto.setId(set.getString("id"));
				dto.setPw(set.getString("pw"));
				dto.setName(set.getString("name"));
				dto.seteMail(set.getString("eMail"));
				dto.setrDate(set.getTimestamp("rDate"));
				dto.setAddress(set.getString("address"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				set.close();
				pstmt.close();
				connection.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return dto;
		
	}
	
	public int updateMember(MemberDto dto) {
		int ri = 0;
		
		Connection connection = null;
		PreparedStatement pstmt = null;
		String query = "update members set pw=?, eMail=?, address=? where id=?";
		
		try {
			connection = getConnection();
			pstmt = connection.prepareStatement(query);
			pstmt.setString(1, dto.getPw());
			pstmt.setString(2, dto.geteMail());
			pstmt.setString(3, dto.getAddress());
			pstmt.setString(4, dto.getId());
			ri = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
				connection.close();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		
		return ri;
	}
	
	private Connection getConnection() {
		
		Context context = null;
		DataSource dataSource = null;
		Connection connection = null;
		try {
			context = new InitialContext();
			dataSource = (DataSource)context.lookup("java:comp/env/jdbc/Oracle11g");
			connection = dataSource.getConnection();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return connection;
	}
	
}
