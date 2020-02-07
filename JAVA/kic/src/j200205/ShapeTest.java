package j200205;

public class ShapeTest {

   public static void main(String[] args) {
      // TODO Auto-generated method stub
         System.out.println("객체형변환(자동형변환)");
         Shape s=new Shape();
         Point p=new Point();
         Line l=new Line();
         Square sq=new Square();
         
         s.shapeDraw();
         p.pointDraw();
         l.lineDraw();
         sq.squareDraw();
         System.out.println("==객체자동형변환==");
         Shape sh[]=new Shape[4];//객체배열
         sh[0]=s;//Shape
         sh[1]=p;//Shape+Point
         sh[2]=l;//Shape+Point+Line
         sh[3]=sq;//sh[3]=new Square();=>Shape s=new Square();
         
         for(int i=0;i<sh.length;i++) {
            sh[i].draw();//메서드는 같지만 객체가 다르기때문에 각각을 구분할 수 있다.(=다형성)
            whoAreYou(sh[i]);
         }//for
   }
   //상속관계(=형변환)->instanceof연산자
   //형식) Car sonata=new Car();=>if(객체명 instanceof 클래스명)==true
   static void whoAreYou(Shape sh) {//자동형변환이 형성
      //Shape
      if(sh instanceof Shape)
         System.out.println("I am Shape");
      else
         System.out.println("I am not Shape");
      //Point
      if(sh instanceof Point)
         System.out.println("I am Point");
      else
         System.out.println("I am not Point");
      //Line
      if(sh instanceof Line)
         System.out.println("I am Line");
      else
         System.out.println("I am not Line");
      //Square
      if(sh instanceof Square)
         System.out.println("I am Square");
      else
         System.out.println("I am not Square");
      System.out.println("==============");
   }
}
//Shape->Point(점)->Line(선)=>Square(다각형)
class Shape{
   //모든 도형에 공통으로 사용하는 메서드
   void draw() {
      System.out.println("Shape");
   }
   //Shape전용 메서드
   void shapeDraw() {
      System.out.println("Shape");
   }
}
//is a 관계
class Point extends Shape{
   void draw() {
      System.out.println("Point");
   }
   void pointDraw() {
      System.out.println("Point");
   }
}
//Line
class Line extends Point{
   void draw() {
      System.out.println("Line");
   }
   void lineDraw() {
      System.out.println("Line");
   }
}

//Square
class Square extends Line{
   void draw() {
      System.out.println("Square");
   }
   void squareDraw() {
      System.out.println("Square");
   }
}








