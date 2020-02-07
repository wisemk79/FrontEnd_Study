package j200205;
/*
 * 객체형변환(자동,명시적인(=강제)형변환)
 * 각 업무별로 직원의 세금율이 다르기 때문에 따로 따로 메서드를 작성해야 된다(전제 조건)
 */
class Employee{//직원(신입,팀장,엔지니어,,,)500명(부서별로 직원이 다르다)
   public void taxRate(Employee e) {
      
      if(e instanceof Manager) {//man.taxRate(man);
         //내부적으로 자식에 맞게 자식형으로 형변환시켜서 계산
         Manager m=(Manager)e;// (자식클래스명)부모객체명
         System.out.println("Manager에 맞는 세금구하기");
      }else if(e instanceof Engineer) {
         Engineer en=(Engineer)e;
         System.out.println("Engineer에 맞는 세금구하기");
      }else if(e instanceof Employee) {
         System.out.println("Employee에 맞는 세금구하기");
      }
   }
   //public void taxRate2(Manager e) {}
   //public void taxRate3(Engineer e) {}
   //업무별로 세금율이 다 다르기에 직원의 수도 많고 업무가 복잡=>중복된 코딩이 반복적으로 사용(단점)
   //상속관계->가장 최상위 부모클래스형으로 형변환이 가능->메서드 한개
}
//팀장=>직원의 기능+팀장의 기능
class Manager extends Employee{
   //public void taxRate(Manager e) {} =>이렇게 메서드 작성할 필요없다.
}
//엔지니어=>직원의 기능+엔지니어 기능
class Engineer extends Employee{
   //public void taxRate(Engineer e) {}
}

public class CastTest {

   public static void main(String[] args) {
      // TODO Auto-generated method stub
        Employee emp=new Employee();
        Manager man=new Manager();
        Engineer eng=new Engineer();
        //세금율->메서드를 다르게 작성(taxRate())
        emp.taxRate(emp);
        man.taxRate(man);//Manager->Employee(객체 자동형변환)
        eng.taxRate(eng);//Engineer->Employee
   }

}




