package prob2;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("�̸��� �Է��Ͻÿ�");
		String name = scan.nextLine();
		System.out.println("ü���� �Է��Ͻÿ�(kg)");
		int weight = scan.nextInt();
		System.out.println("Ű�� �Է��Ͻÿ�(m)");
		float height = scan.nextFloat();
		double BMI=0.0;
		BMI=weight/(height*height);
		
		if(BMI<18.5) {
			System.out.println(name + "���� ü�ߺ����Դϴ�.");
		}else if(BMI>=18.5 && BMI<=22.9) {
			System.out.println(name + "���� �����Դϴ�.");
		}else if(BMI>=23.0 && BMI<=24.9) {
			System.out.println(name + "���� ��ü���Դϴ�.");
		}else {
			System.out.println(name + "���� ���Դϴ�.");
		}
		scan.close();
		

	}

}
