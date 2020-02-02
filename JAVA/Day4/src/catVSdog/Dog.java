package catVSdog;

import java.util.Random;

public class Dog extends Animal{
	private final Random mRandom = new Random(); 
	private static final String[] DOG_CRY = {"Woof woof", "멍멍", "ワンワン","狗狗"}; 
	//static(공유하는 것) final(변하지 않는 상수)
	//dog 객체를 생성할때 체력을 생성한다
	public Dog(int hp) {
		super(hp);
	}
	
	//개 모습 출력
	@Override
	public void draw(){
		System.out.println(DOG_CRY[mRandom.nextInt(DOG_CRY.length)]);
		System.out.println("|\\_/|");
		System.out.println("|q p|   /}");
		System.out.println("( 0 )\"\"\"\\");
		System.out.println("|\"^\"`    |");
		System.out.println("||_/=\\\\__|");
		System.out.println("");
		System.out.println("\"사나운 개가 출현했다!!\"\n");
	}
	//개의 어택 액션 출력
	@Override
	public void attackDraw() {
		System.out.println("          !!!!!!!몸통박치기!!!!!!     ");
		System.out.println("      *    *     *       |\\_/| -------");
		System.out.println("        *  *  *          |q p|   /} ------");
		System.out.println("  * *   ***   * *     ( 0 )\"\"\"\\ -------");
		System.out.println("  * *   ***   *  *    |\"^\"`    | -------");
		System.out.println("        *  *  *          ||_/=\\\\__| -------");
		System.out.println("     *     *     *");
		System.out.println("");
		
	}
	
}
