package prob;

public class WaterTank {
	private int water;
	//sleep(1000); 1000ms(1초) 동안 스레드를 일시정지 시킨다.
	//물의양 초기화
	public WaterTank(int water) {
		this.water = water;
	}
	
    // amount 만큼 물 빠짐 (물이 없으면 스레드 대기상태(wait() 사용))
    public synchronized void drain(int amount) {
    	water-=amount;
    	
    }

    // amount 만큼 물 보충 (물이 보충되면 notifyAll())
    public synchronized void pour(int amount) {
    	water+=amount;
    }

    // water 반환
    public int getWater() {
		return water;}
}
