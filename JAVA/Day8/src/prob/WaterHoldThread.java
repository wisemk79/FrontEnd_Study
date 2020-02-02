package prob;

public class WaterHoldThread extends Thread {
    private WaterTank tank;
    private int amount;
    public WaterHoldThread(WaterTank tank, int amount) {
    this.tank = tank;
    this.amount = amount;
    }
    
    // 1초에 한 번씩 tank로부터 물을 뺌(drain() 사용), 콘솔에 출력
    public void run() {
    	while(true) {
    		try {
				sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
    		if(tank.getWater() <= 0) {
                try {
                	synchronized(this) {//this 여기서 호출 synchronized  a에서 호출할려면  
                		wait();
                	}
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
            }
            System.out.println("물이 "+ this.amount + "ml 빠짐, "+ tank.getWater() + "ml 남음");
            tank.drain(this.amount);
    	}
    }
}

