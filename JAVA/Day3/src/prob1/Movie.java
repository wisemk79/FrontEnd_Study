package prob1;

public class Movie {
	private boolean[][] isArrSeat;
	
	
	Movie(){
		isArrSeat=new boolean[2][5];
		//�迭 �ڵ� �ʱ�ȭ
		//������:0
		//�Ǽ���:0.0
		//
		//
		for(int i = 0; i < isArrSeat.length; i++) {
			for(int j = 0; j < isArrSeat[i].length; j++){//��̿� [i]�ָ� ���� ����!
				isArrSeat[i][j] = true;
			}
		}
	}
	
	
	void viewSeat(){
		for(int i = 0; i < isArrSeat.length; i++) {
			for(int j = 0; j < isArrSeat[i].length; j++){
				if(isArrSeat[i][j]==true) {
					System.out.print('O');
				}else {
					System.out.print('X');
				}
			}
			System.out.println();
		}
	}
	
	void reservationSeat( int row, int col ) {
				if(row > 1|| row < 0 || col > 4 || col < 0 ){
						System.out.println("���� �¼��Դϴ�.");
				}
				else if(isArrSeat[row][col]==true){
					isArrSeat[row][col]=false;
					System.out.println("������ �Ϸ�Ǿ����ϴ�.");
				}else {
					System.out.print("�̹� ����� �¼��Դϴ�.");
				}
				
	}
	
}
