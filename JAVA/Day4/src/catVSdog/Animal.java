package catVSdog;

import java.util.Random;

public abstract class Animal {//인터페이스 동물이 가진 특징,hp는 모든 동물의 공통특성
	private final Random mRandom = new Random(); 
	protected int mHp;//필드명 앞에 구분하는 문자를 붙혀주는 이유는 멤버인지 쉽게 알 수 있도록하기위해  m을 붙힘
	//camel case <-method 또는 변수의 이름을 정할 때 단어의 첫 글자를 대문자로하고 나머지를 소문자로 쓰는 방법 단, 가장 첫단어의 글자는 소문자로
	
	public Animal(int hp) {
		mHp = hp;
	}
	public abstract void draw();
	public abstract void attackDraw();
	
	public int attack() {
		int damage = mRandom.nextInt(50);
		return damage;
	}
	
	//대미지 받으면 리턴받은 대미지를 체력에서 감소
	public void damage(int damage){
		mHp -= damage;
	}
	
	public int getHp() {
	//Cat에 상속을 하였기 때문에(Cat 클래스가 동일한 멤버와 메소드를 가진다.)  main에서 cat.getHp(); 불러올 수 있다
		return mHp;
	}
	
	//개와 고양이가 죽었는지 살았는지 확인
	public boolean isAlive(){
		if(mHp <= 0) {//return mHp > 0;
			return false;
		}
		return true;
	}//boolean값을 리턴하는 것 is~살아있니?
	
	
	
	//파라미터 함수 또는 생성자에서 입력받을 수 있는 값의 목록을 의미
}

