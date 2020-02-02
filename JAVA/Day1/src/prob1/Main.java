package prob1;

public class Main {

	public static void main(String[] args) {
		int no1 = 100;//변수명에  데이터형이 들어가면 오류가 난다
		float no2 = 10.0F;//변수명에 조건식이 들어가면 오류가 나며 float값의 경우 뒤에 F를 붙혀줘 float값임을 명시적으로 나타내야함
		long no3 = 30;//변수명에 데이터형이 들어가면 안되고  long에는 정수형 숫자만들어갈 수 있다.
		char no4 = 'A';//char 데이터형은 한글자인 글자가 들어가거나 아스키코드표에있는 숫자가 들어감 
		double no5 = 1.0;//변수명엔 실수 데이터형인 float가 들어갈 수 없으며 double엔 실수형 데이터가 들어감  
		float no6 = 100.0F;//100은 정수형 데이터이며 float값의 경우 뒤에 F를 붙혀줘 float값임을 명시적으로 나타내야함
		boolean no7 = (3<2);//(3 < 2 ? 1 : 2);삼항연산자는 조건의 TRUE FALSE에 따라 값을 반환하기 때문에 앞의 삼항연산자는 조건이 false이므로 2를반환하고 이를 no7에 담을것임 그러나 데이터형이 boolean이기 때문에 받질 못해 오류가난다 
		short no8 = 32767;//short 정수형 데이터의 경우 32768이상의 수를 담을수 없다

		System.out.println("1번: " + no1);
		System.out.println("2번: " + no2);
		System.out.println("3번: " + no3);
		System.out.println("4번: " + no4);
		System.out.println("5번: " + no5);
		System.out.println("6번: " + no6);
		System.out.println("7번: " + no7);
		System.out.println("8번: " + no8);


	}

}
