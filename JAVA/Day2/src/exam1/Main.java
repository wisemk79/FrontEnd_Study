package exam1;

import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		// 조건1, 2
		Scanner scan = new Scanner(System.in);
		int[] nums = new int[10]; // 0 1 2 3 4 5 6 7 8 9
											//    1 2 5 6 7 9 3 4 10 8
		int temp;
		
		System.out.println("값들을 입력하세요");		
		for(int i=0; i < nums.length; i++) {
			nums[i] = scan.nextInt();
		}
		
		// 조건 3
		for(int i=0; i < nums.length; i++) {
			for(int j=i; j < nums.length; j++) {
				if(nums[i] < nums[j]) {
					temp = nums[j];
					nums[j] = nums[i];
					nums[i] = temp;
				}
			}
		}
		
		// 조건 4
//		for(int i = 0; i < nums.length; i++) {
//			System.out.print(nums[i] + "\t");
//		}
		
		// 조건 5
		System.out.println("\n최소값 : " + nums[9]);
		System.out.println("최대값 : " + nums[0]);
		
		scan.close();
	}
}