package j200205;

//caller method ----> worker method 
public class exceptionTest2 {

	public static void main(String[] args) {
/*예외처리방법 2가지
 * 
 * 1.try~catch~final방법 =>자기가 책임지는 경우  ->자바스크립트 적용
 * 
 * 	try{
 * 		예외가 발생가능성이 있는 코딩 
 * }catch(예외처리 클래스명 예외처리 객체){
 *	해결책=>3가지방법  
 *}
 * 
 * ***2.메소드명() throws 발생한 예외처리클래스명 =>대신부탁(=떠넘기기)  
 * */
		
		/*
		int i = 0;//첨자 
		String greetings[] = {"객체형변환","예외처리","예외처리 방법"};
		while(i<3) {
			System.out.println(greetings[i]);
			i++;
		}
		*/
		try {
		exceptionTest2 et = new exceptionTest2();
		et.go();
		}catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("배열의 첨자가 벗어난 인덱스 번호가 있습니다. 잘 찾아보세요. ");
			System.out.println(e.getMessage());
			System.out.println(e);
			e.printStackTrace();//아주자세하게 에러나온 이유를 설명 
		}
		System.out.println("예외처리 종료!");
		
	}
	
	public void go() throws ArrayIndexOutOfBoundsException {
		int i = 0;//첨자 
		String greetings[] = {"객체형변환","예외처리","예외처리 방법"};
		while(i<4) {
			System.out.println(greetings[i]);
			i++;
		}
	}

}
