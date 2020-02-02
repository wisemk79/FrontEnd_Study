package prob2;

import java.util.Scanner;


public class Main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		int output = 0;
		int n = 0;
		while(true) {
			System.out.println("N의 값을 입력하시오. (1 < N < 10000)");
			n = scan.nextInt();
			if(n > 1 && n < 10000) {
				break;
			}
			System.out.println("범위에 맞는 값을 입력하세요");
		}
		int[] numberList = new int[n];
		String[] cgStr = new String[n];
		for(int i = 0; i < numberList.length; i++){
			numberList[i] = i + 1;
			cgStr[i] = "" + numberList[i];
			char[] numbs = cgStr[i].toCharArray();
			for(int j = 0; j < numbs.length; j++) {
				if(numbs[j] == '7'){
					output += 1;
				}	
			}
		}
		
		System.out.println("1~"+n+ "사이에 있는 7의 개수는 " + output +"입니다");		
		scan.close();
	}

}
