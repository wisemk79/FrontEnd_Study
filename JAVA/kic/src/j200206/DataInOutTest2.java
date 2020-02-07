package j200206;

import java.io.*;

//메모리 상에 저장된 각종 자료형의 데이터를 파일로 저장 (문자열,숫자,double,boolean,char)
public class DataInOutTest2 {

	public static void main(String[] args) throws IOException {
		//1.파일로 저장
		FileOutputStream fos = new FileOutputStream("wisemk/data.txt");
		
		//2.자바의 자료형에 맞게 포장 -> 객체의 생성자 -> 연결(다단계 결합)
		DataOutputStream dos = new DataOutputStream(fos);
		
		//3.메모리에 자료형에 맞게 저장 
		char han = '한';//아스키코드값 0~65535
		System.out.println((int)han);//아스키코드값 확인 
		byte b = 21;
		String str = "bg\n";
		byte ba[] = {65,66,67};//A,B,C(변환)
		//파일로저장 => 형식) write자료형(저장할값)
		dos.writeChar(han);
		dos.writeByte(b);//21
		dos.writeBytes(str);//writeString() (x)
		dos.write(ba);//byte[] -> 배열의 경우->많은양의 데이터를 저장, 출력 
		fos.close();//메모리 해제 -> 출력스트림 종료 ->closd() 
		//다시 파일로 불러와서 콘솔에 출력 
		DataInputStream dis = new DataInputStream(new FileInputStream("C:/webtest/3.java/data.txt"));
		
		//변수명 = dis.read자료형(); 
		char c = dis.readChar();
		byte b1 = dis.readByte();
		String s = dis.readLine();
		byte bb[] = new byte[3];
		dis.read(bb);
		dis.close();
		
		System.out.println("c=> " + c);
		System.out.println("b1=> " + b1);
		System.out.println("s=> " + s);
		System.out.println("bb => " + bb);//배열의 주소값 출력 
		//for문을 이용 -> 출력 => String => (byte[]) getByte()
		
		
	}

}
