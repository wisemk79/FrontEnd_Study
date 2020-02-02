package prob1;

public class Movie {
	private boolean[][] isArrSeat;
	
	
	Movie(){
		isArrSeat=new boolean[2][5];
		//배열 자동 초기화
		//정수형:0
		//실수형:0.0
		//
		//
		for(int i = 0; i < isArrSeat.length; i++) {
			for(int j = 0; j < isArrSeat[i].length; j++){//어레이에 [i]주면 열의 길이!
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
						System.out.println("없는 좌석입니다.");
				}
				else if(isArrSeat[row][col]==true){
					isArrSeat[row][col]=false;
					System.out.println("예약이 완료되었습니다.");
				}else {
					System.out.print("이미 예약된 좌석입니다.");
				}
				
	}
	
}
