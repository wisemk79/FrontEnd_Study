package prob;

import java.util.Scanner;

public class PourWaterMain {
	public static void main(String[] arg) {
		WaterTank wt = new WaterTank(1000);
		WaterHoldThread wht= new WaterHoldThread(wt, 100);
		new WaterHoldThread(wt, 100).start();
		Scanner s = new Scanner(System.in);
		System.out.println("==========밑빠진 독에 물 붓기===========");
		while (true) {
			int a = s.nextInt();
			switch (a) {
			case 1:
				new WaterHoldThread(wt, 100).start();
				if (wt.getWater() >= 100) {
					synchronized (wht) {
						wht.notifyAll();
					}
				}
				break;
			case 2:
				wt.pour(500);
				break;
			}
		}
	}
}
