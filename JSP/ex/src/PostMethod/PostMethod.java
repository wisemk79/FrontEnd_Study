package PostMethod;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PostMethod
 */
@WebServlet("/PostMethod")
public class PostMethod extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PostMethod() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	}//get방식은 웹브라우저를 통해서 요청이 들어왔을때, 또는 html에서  form 태그의 메소드 방식이 get방식일때 호출되는 것
	//url에 정보가 담기기 때문에 정보보안이 취약하다.

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("doPost");
		
		response.setContentType("text/html; charset = euc-kr");
		PrintWriter writer = response.getWriter();
		
		writer.println("<html>");
		writer.println("<head>");
		writer.println("</head>");
		writer.println("<body>");
		writer.println("<h1>POST 방식입니다. 따라서 doPost 메소드 호출 되었습니다.</h1>");
		writer.println("</body>");
		writer.println("</html>");
	}
	//html에서 form 태그의 메소드가 post방식일때 호출되는것이다.
	//정보가 header에 담기기 때문에 보안에 강하다.
	
	//컨텍스트 패스(context path) 	was(WebAplicationServer)에서 웹 어플리케이션을 구분하기 위한 path
	//이클립스에서 프로젝트를 생성하면 자동으로 server.xml에 추가된다.
	//sever.xml에 추가된 내용 ===> <Context docBase="helloworld" path="/helloworld" reloadable="true" source="org.eclipse.jst.jee.server:helloworld"/><Context docBase="ex" path="/ex" reloadable="true" source="org.eclipse.jst.jee.server:ex"/></Host>

}