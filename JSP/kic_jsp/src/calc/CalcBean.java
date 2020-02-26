package calc;

// 자바빈즈 => 웹상에 값을 입,출력하거나, 메소드를 호출할 때 필요로 하는 클래스(DTO)
// 반드시 public class로 줘야 외부에서 접근이 가능 -> 그 클래스의 객체를 생성 -> 메소드 호출, 멤버변수에 값 저장
public class CalcBean {

   private int num1=0, num2=0;
   private String operator="";
   private int result=0;
   
   public int getNum1() {
      return num1;
   }
   public void setNum1(int num1) {
      this.num1 = num1;
      System.out.println("setNum1 호출됨!");
   }
   public int getNum2() {
      return num2;
   }
   public void setNum2(int num2) {
      this.num2 = num2;
      System.out.println("setNum2 호출됨!");
   }
   public int getResult() {
      return result;
   }
   public String getOperator() {
      return operator;
   }
   public void setOperator(String operator) {
      this.operator = operator;
      System.out.println("setOperator 호출됨!");
   }
   
   public void calculate() { // 멤버변수에 저장된 값을 그대로 불러다 사용이 가능 -> 매개변수 X
            
      if(operator.equals("+")) {
         result = num1 + num2;
      }
      else if(operator.equals("-")) {
         result = num1 - num2;
      }
      else if(operator.equals("*")) {
         result = num1 * num2;
      }
      else if(operator.equals("/")) {
         result = num1 / num2;
      }
      
      
   }
}