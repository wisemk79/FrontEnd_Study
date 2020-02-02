package prob;

public class Man implements Human, Fist {

	@Override
	public void fireFist() {
		System.out.println("불주먹!");
		
	}

	@Override
	public void say() {
		System.out.println("안녕?");
		
	}
		
}
