package day1;

import java.util.Scanner;

public class Main {
	public static void main(String[] arg) {//�ܿ�
		int a = 10;
		for(int i=0;i<100;i++) {
			a++;
			System.out.println(a+"��°");//110��°
			if(i==50) {
				break;
			}
		}
		Scanner scan = new Scanner(System.in); //ctrl shift o
		String name = scan.nextLine();
		int weight = scan.nextInt();
		float height = scan.nextFloat();
		System.out.println(name +""+weight+""+height);
		scan.close();//^����
		//��Ű���� ���θ��� �����
		//���� ctrl f11
		
//		while(true) {
//			a++;
//			System.out.println(a);
//			if(a>100) {
//				break;
//			}
//		}
	}
}
