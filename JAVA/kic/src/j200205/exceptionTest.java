package j200205;

public class exceptionTest {

	public static void main(String[] args) {
		//예외 정상적인 자바프로그램의 실행을 방해하는 에러들
		//예외 처리 정상적인 프로그램의 실행을 방해하는 에러들을 만났을 때 어떻게하면 에러가 나오지 않도록, 즉 정상적으로 실행하는 방법을 제시해 주는것 
		
	/*
	 * 1. 물리적인 예외(문법을 체크) => 눈에보임(오타)->수정->컴파일 
	 * 
	 * ** 2. 논리적인 예외 -> 눈에 안보임 ->논리적인 오류 => 계산, 설계 x 
	 * 						문법적으로 문제 없음 -> 실행 -> 에러유발 
	 * 						->RuntimeException (=실행예외) 
	 * 
	 * */
		
		int i = 0;//첨자 
		String greetings[] = {"객체형변환","예외처리","예외처리 방법"};
		while(i<3) {
			System.out.println(greetings[i]);
			i++;
		}
		
		/*Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3
												==============================
												예외처리 클래스 이름 
	at j200205.exceptionTest.main(exceptionTest.java:21)*/
		
	}

}
