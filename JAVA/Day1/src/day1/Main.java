package day1;

import java.util.Scanner;

public class Main {
	public static void main(String[] arg) {//외워
		int a = 10;
		for(int i=0;i<100;i++) {
			a++;
			System.out.println(a+"번째");//110번째
			if(i==50) {
				break;
			}
		}
		Scanner scan = new Scanner(System.in); //ctrl shift o
		String name = scan.nextLine();
		int weight = scan.nextInt();
		float height = scan.nextFloat();
		System.out.println(name +""+weight+""+height);
		scan.close();//^제곱
		//패키지로 따로만들어서 만들것
		//실행 ctrl f11
		
//		while(true) {
//			a++;
//			System.out.println(a);
//			if(a>100) {
//				break;
//			}
//		}
	}
}
