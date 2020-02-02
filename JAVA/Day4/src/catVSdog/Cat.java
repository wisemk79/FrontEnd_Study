package catVSdog;

import java.util.Random;

public class Cat extends Animal{	
	private final Random mRandom = new Random(); 
	private static final String[] CAT_CRY = {"Meow", "야옹", "ニャ-", "喵"};//CAT_CRY<-상수는 대문자로 단어와 단어사이에 _(언더바)를 넣는다 
	
	//cat 객체를 생성할때 체력을 받아 생성한다.
	public Cat(int hp) {
		super(hp);
	}
	
	//고양이의 모습 출력
	@Override
	public void draw() {
		System.out.println(CAT_CRY[mRandom.nextInt(CAT_CRY.length)]);
		System.out.println("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|");
		System.out.println("");
		System.out.println("\"야생의 고양이가 출현했다!!!\"\n");
	}
	//고양이의 어택 액션 출력
	@Override
	public void attackDraw() {
		System.out.println("            !!!!!소리지르기!!!!!             ");									
		System.out.println("\\    /\\     //               ||            ");
		System.out.println(" )  ( ')    //     |||||   || ===     ");
		System.out.println("(  /  )     \\\\     |||||   || ===     ");
		System.out.println(" \\(__)|   \\\\               ||            ");
		System.out.println("");
		
	}

	


	
	
	
}
