package catVSdog;

import java.util.Random;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Cat cat = new Cat(100);
		Animal dog = new Dog(100);
		Scanner scan = new Scanner(System.in);
		Random randomNumber = new Random();
		String[] playerArr = new String[2];
		int[] randomNum = new int[2];
		String inputPlayer;
		int turn1, turn2 = 0;
			

		//개, 고양이 선택
		check:
			while(true) {		
				System.out.println("'개' 또는 '고양이'를 입력하여 선택해주세요.\n");
				inputPlayer = scan.next();
				switch(inputPlayer) {
				case "고양이":
					playerArr[0] = "고양이";
					playerArr[1] = "개";
					cat.draw();
					dog.draw();
					break check;
				case "개":
					playerArr[0] = "개";
					playerArr[1] = "고양이";
					dog.draw();
					cat.draw();
					break check;
				default :
					System.out.println("없는 동물입니다.(개 또는 고양이)\n");
				}

			}
		//게임시작		
		System.out.println("선공격 순서를 선택합니다.\n");

		//선공격 순서 선택
		while(true) {
			for(int i = 0; i <2; i++) {
					System.out.println(playerArr[i] + "님 번호를 뽑아주세요.(아무 숫자나 문자를 입력해주세요.)\n");
					inputPlayer = scan.next();
					randomNum[i] = randomNumber.nextInt(10);
					System.out.println(playerArr[i] + "님은 " + randomNum[i] + "을 뽑으셨습니다.\n");
			}
			if(randomNum[0] == randomNum[1]) {
				System.out.println(playerArr[0] + "님과 " + playerArr[1] + "님의 숫자가 같습니다. 다시 뽑아주세요.\n");
				continue;	
			}else if(randomNum[0] < randomNum[1]) {
				System.out.println(playerArr[1] + "님이 선공입니다.\n");
				turn1 = 1;
				turn2 = 0;
				break;
			}else {
				System.out.println(playerArr[0] + "님이 선공입니다.\n");
				turn1 = 0;
				turn2 = 1;
				break;
			}

		}			

		//전투
		out:
			while(true) {
				int dogAttackDamage, catAttackDamage = 0;
				switch(playerArr[turn1]) {
				case "개": 
					System.out.println(playerArr[turn1] + "님 공격해주세요.(아무 숫자나 문자를 입력해주세요.)\n");
					inputPlayer = scan.next();
					dogAttackDamage = dog.attack();
					cat.damage(dogAttackDamage);
					dog.attackDraw();
					System.out.println(playerArr[turn1] + "는 " + dogAttackDamage + "만큼의 대미지를 주었다!\n" );
					System.out.println(playerArr[turn2] + "의 체력이 " + cat.getHp() + "이 되었습니다.\n");
					if(cat.isAlive() ==  false) {
						System.out.println("개가 승리하였습니다!");
						break out;
					}
					System.out.println(playerArr[turn2] + "님 공격해주세요.(아무 숫자나 문자를 입력해주세요.)\n");
					inputPlayer = scan.next();
					catAttackDamage = cat.attack();
					dog.damage(catAttackDamage);
					cat.attackDraw();
					System.out.println(playerArr[turn2] + "는 " + catAttackDamage + "만큼의 대미지를 주었다!\n" );
					System.out.println(playerArr[turn1] + "의 체력이 " + dog.getHp() + "이 되었습니다.\n");
					if(dog.isAlive() == false) {
						System.out.println("고양이가 승리하였습니다!");
						break out;
					}
					break;
				case "고양이":
					System.out.println(playerArr[turn1] + "님 공격해주세요.(아무 숫자나 문자를 입력해주세요.)\n");
					inputPlayer = scan.next();
					catAttackDamage = cat.attack();
					dog.damage(catAttackDamage);
					cat.attackDraw();
					System.out.println(playerArr[turn1] + "는 " + catAttackDamage + "만큼의 대미지를 주었다!\n" );
					System.out.println(playerArr[turn2] + "의 체력이 " + dog.getHp() + "이 되었습니다.\n");
					if(dog.isAlive() == false) {
						System.out.println("고양이가 승리하였습니다!");
						break out;
					}
					System.out.println(playerArr[turn2] + "님 공격해주세요.(아무 숫자나 문자를 입력해주세요.)\n");
					inputPlayer = scan.next();
					dogAttackDamage = dog.attack();
					cat.damage(dogAttackDamage);
					dog.attackDraw();
					System.out.println(playerArr[turn2] + "는 " + dogAttackDamage + "만큼의 대미지를 주었다!\n" );
					System.out.println(playerArr[turn1] +"의 체력이 " + cat.getHp() + "이 되었습니다.\n");
					if(cat.isAlive() ==  false) {
						System.out.println("개가 승리하였습니다!");
						break out;
					}
					break;
				}
	}


			
		scan.close();
	}
}
