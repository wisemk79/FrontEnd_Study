package exam1;

import java.util.Random;

public class BaseballGame {
	// 멤버변수
	private int[] answer;
	private int cntThrow;
	private Random rand;
	protected int test = 1;
	
	// 생성자
	public BaseballGame(){
		answer = new int[3];
		cntThrow = 0;
		rand = new Random();
	}
	
	// 게임시작 멘트 및 난수 생성
	void initialize() {
		System.out.println("숫자 야구 게임!");
		while(true) {
			for(int i = 0; i < answer.length; i++) {
				answer[i] = rand.nextInt(9)+1;
			}			
			if(!(answer[0] == answer[1] || answer[0] == answer[2] || answer[1] == answer[2])) {
				break;
			}
		}
	}
	
	// 정답 비교 및 strike, ball 개수 반환
	int[]  judge(int[] input) {	//선언하고 빨간줄 뜨는 이유는 int에 반환값이 있어야 하는데 없어서
		int[] strikeBall = new int[2];
		for(int i = 0; i < answer.length; i++) {
			for(int j = 0; j < input.length; j++) {
				if(answer[i] == input[j]) {
					if(i == j) {
						strikeBall[0]++;		//strike 증가
					}else {
						strikeBall[1]++;		//ball 증가
					}
				}
			}
		}
		cntThrow++;
		return strikeBall;	//int[]  judge 이 자료형과 return하는 자료형이 같아야 한다(strikeBall이 int)
	}
	
	// 투구 횟수 반환
	int getCntThrow() {
		return cntThrow;	
	}
}