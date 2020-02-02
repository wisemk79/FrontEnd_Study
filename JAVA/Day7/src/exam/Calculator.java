package exam;

public class Calculator {
	//숫자 버튼을 눌렀을 때 발생하는 이벤트
	String clickNum(String input, String num) {
		String output = input +num;
		return output;
	}
	//연산자 버튼을 눌렀을 떄 발생하는 이벤트
	String clickOp(String input, String op) {
		String output = input + " " + op + " ";
		return output;
	}
	
	
	//op "="일 시에 계산하는 알고리즘
	String calculation(String input) {
		String[] inputArr = input.split(" ");//split("") <-"" 안의 기준으로 나눈다
		String output;
		int result = 0;
		
		switch(inputArr[1]) {
		case "+":
			result = Integer.parseInt(inputArr[0]) +Integer.parseInt(inputArr[2]);
			break;
		case "-":
			result = Integer.parseInt(inputArr[0]) -Integer.parseInt(inputArr[2]);
			break;
		case "*":
			result = Integer.parseInt(inputArr[0]) *Integer.parseInt(inputArr[2]);
			break;
		case "/":
			result = Integer.parseInt(inputArr[0]) /Integer.parseInt(inputArr[2]);
			break;
		case "%":
			result = Integer.parseInt(inputArr[0]) %Integer.parseInt(inputArr[2]);
			break;
		}
		output = input + "=" + result + "\n";
		return output;
	}
}
