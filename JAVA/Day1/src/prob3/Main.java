package prob3;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("��ǥ �ݾ��� �Է��Ͻÿ�(100���� ����)");
		int goal=scan.nextInt();
		System.out.println("��ǥ �ݾ��� " + goal + "���� �Դϴ�.");
		int achive=0;
			while(true) {
				System.out.println("�Աݾ��� �Է��ϼ���.(20��������)");
				int insertMoney=scan.nextInt();
				if(insertMoney>20) {
				System.out.println("20���� ������ �ݾ��� �Է��ϼ���.\n");
				continue;
				}
				if(insertMoney<=20 && insertMoney-5>0) {
					achive+=insertMoney-5;
					System.out.println("���� ���� �ܾ��� "+achive+"���� �Դϴ�.");
				}else {
					System.out.println("5�������ϴ� �Աݵ��� �ʽ��ϴ�.\n");
					continue;
				}
				if(achive>=goal) {
					System.out.println("��ǥ���� �޼��Ͽ����ϴ�.");
					break;
				}
			}
			scan.close();	
			
	}

}
