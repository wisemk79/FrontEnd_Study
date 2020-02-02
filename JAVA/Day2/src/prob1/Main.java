package prob1;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int[] coin = new int[4];
		
		System.out.println("금액을 입력하시오");
		int inputv = scan.nextInt();
		System.out.println("입력한 금액은 "	 + inputv + "원 입니다");
		
		for(int i = 0; i < coin.length;i++) {
			if(i==0){
				coin[i]+=inputv/500;
				inputv=inputv-500*coin[i];
				System.out.println("500원: " + coin[i]);
			}
			if(i==1){
				coin[i]+=inputv/100;
				inputv=inputv-100*coin[i];
				System.out.println("100원: " + coin[i]);
			}
			if(i==2){
				coin[i]+=inputv/50;
				inputv=inputv-50*coin[i];
				System.out.println("50원: " + coin[i]);
			}
			if(i==3){
				coin[i]+=inputv/10;
				inputv=inputv-10*coin[i];
				System.out.println("10원: " + coin[i]);
			}
			
		}
		scan.close();
		

	}

}
