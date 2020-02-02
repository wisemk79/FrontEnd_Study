package exam2;

import java.util.Random;
import java.util.Scanner;

public class Main {
	public static void main(String[] agrs) {
		Random rand = new Random();
		Scanner scan = new Scanner(System.in);
		boolean [][] arr = new boolean[4][4];
		int n = rand.nextInt(4);	
		int m = rand.nextInt(4); 
		int x, y;
	
		/*
		 * int n = rand.nextInt(arr.length); 도 가능, 배열의 크기를 정확히 알고 있다면!
		 * int m = rand.nextInt(arr[0].length); 도 가능
		 */
		
		for(int i=0; i < arr.length; i++) {
			for(int j=0; j < arr.length; j++) {
				arr[i][j] = true;
			}
		}
		System.out.println("보물이 나타났습니다~!!!@!@#!!");
		
		// 조건 2, 3
		while(true) {
			System.out.println("위치를 선택하세욥");
			System.out.print("행 : ");						
			x = scan.nextInt();
			
			System.out.print("열 : ");
			y = scan.nextInt();
			
			// 조건4
			if(!(x < 4 && y < 4)) {
				System.out.println("유효하지 않은 위치입니다");
				continue;
			}
			
			// 조건5
			if(x == n && y == m) {
				System.out.println("보물을 찾았네용>.< \n게임을 종료할게용");
				break;
			}
			
			if(arr[x][y]) {
				arr[x][y] = false;
				System.out.println("보물을 찾지 못했어요 ㅠㅠ");
			}else{
				System.out.println("이미 찾아본 위치입니다");
			}
		}
		
		scan.close();
	}
}