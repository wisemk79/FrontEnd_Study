package j200205;

public class ExceptionTotal {
	public static void main(String[] args) {
		System.out.println("매개변수를 전달받아서 처리(동적)");
		try {
			int a = Integer.parseInt(args[0]);//"9" -> 9  args값 run configuration에서 values에서 값을 받는
			int b = Integer.parseInt(args[1]);//"3" -> 3
			System.out.println("a=> " + a + ",b=> " + b);
			System.out.println("a를 b로 나눈 몫 => " + (a/b));
			int c = Integer.parseInt(args[3]);
			System.out.println(c);
			int d = Integer.parseInt(args[4]);
		}catch(ArithmeticException e) {// 수식오류 9/0 으로 나눈경우 
			System.out.println(e);//e.String()
			System.out.println("9를 0으로 나눌수가 없습니다. ");
		}catch(IndexOutOfBoundsException | NumberFormatException e) {// 배열의 첨자가 문제발생(한개만 입력한경우) 
			System.out.println(e);
			System.out.println("두개를 반드시 입력하세요!!");
		}/*catch(NumberFormatException e) {//"9" => 9  "a" -> (x) 숫자로 변환 x 
			System.out.println(e);
			System.out.println("입력은 반드시 문자가아닌 숫자로 입력해야 됩니다. ");
		}*/catch(Exception e) {//자식클래스에서 발생된 예외 처리는 부모클래스가 담당 <-- 다른 예외처리클래스 반드시 뒤에 배치하거나 처음부터 exception클래스로 처리하든지 둘주의 하나를 선택해야한다. 
			System.out.println(e.toString());
			System.out.println("위의 예외처리 외에 나머지 모두를 처리합니다. ");
		}finally {
			System.out.println("에러발생 유무와 상관 없이 반드시 처리해야할 구문이 필요한 경우 사용 ");
		}
	}
}
