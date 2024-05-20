package _05_class.e_abstract;

 public abstract class Shape {
// abstract public class Shape {
     String color;

     // 생성자가 있음
     public Shape(String color){
         this.color=color;
     }
     
//      일반 메소드
     void start(){
         System.out.println("도형을 그려보자");
     }

     String getColor(){
         return this.color;
     }

     // 추상메소드!
     // 추상메소드는 중괄호 블록 없이 선언만 한다@
     // 구현부는 자식클래스에서 오버라이딩을 통해서 진행
     // -> 자식 클래스에서 공통적으로 사용할 예정인 함수이지만, 구현부가 모두 다를 때!
     // -> 선택적으로 오버라이딩하는 것이 아닌 "모든 자식 클래스에서 오버라이딩" 되어야 함!!
     abstract void draw();
}
