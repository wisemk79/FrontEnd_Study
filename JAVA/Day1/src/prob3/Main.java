package prob3;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("목표 금액을 입력하시오(100만원 이하)");
		int goal=scan.nextInt();
		System.out.println("목표 금액은 " + goal + "만원 입니다.");
		int achive=0;
			while(true) {
				System.out.println("입금액을 입력하세요.(20만원이하)");
				int insertMoney=scan.nextInt();
				if(insertMoney>20) {
				System.out.println("20만원 이하의 금액을 입력하세요.\n");
				continue;
				}
				if(insertMoney<=20 && insertMoney-5>0) {
					achive+=insertMoney-5;
					System.out.println("현재 통장 잔액은 "+achive+"만원 입니다.");
				}else {
					System.out.println("5만원이하는 입금되지 않습니다.\n");
					continue;
				}
				if(achive>=goal) {
					System.out.println("목표액을 달성하였습니다.");
					break;
				}
			}
			scan.close();	
			
	}

}
