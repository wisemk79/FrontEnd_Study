package j200206;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Sawon {

	public static void main(String[] args) throws IOException {
		String mem_name = null;
		String mem_id = null;
		String mem_pwd = null;
		String mem_gender = null;
		String age = null;
		String phone = null;
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		
		
		System.out.println("====회원정보입력하기====");
		
		System.out.println("이름은?");
		mem_name = br.readLine();
		
		System.out.println("ID는? ");
		mem_id = br.readLine();
		
		System.out.println("암호는? ");
		mem_pwd = br.readLine();
		
		System.out.println("성별은? ");
		mem_gender = br.readLine();
		
		System.out.println("나이는? ");
		age = br.readLine();
		
		System.out.println("전화번호는?");
		phone = br.readLine();
		
	}

}
