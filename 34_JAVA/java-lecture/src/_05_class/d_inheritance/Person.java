package _05_class.d_inheritance;
// 01_ 부모클래스(슈퍼클래스) 정의
// 상속
// - java 에서는 다중상속 지원하지 않음 (여러 개의 부모를 가질 수 없다.)
public class Person {

//  ***** Case1. 필드가 public 인 경우
//     public String name;
//     public int age;
//
//     // 1-1. 부모 클래스가 기본 생성자(생성자에서 매개변수를 받아주지 않는)를 가지는 경우
//     // public Person(){
//     //     System.out.println("부모클래스 Person() 생성자가 실행되었습니다.");
//     // }
//
//     // 1-2. 부모 클래스가 매개변수가 있는 생성자를 가지는 경우
//     public Person(String name, int age){
//         this.name=name;
//         this.age=age;
//         System.out.println("부모클래스 Person(String name, int age) 생성자가 실행되었습니다.");
//     }
    
    // public void say(){
    //     System.out.println("안녕하세요");
    // }
    //
    // public void eat(String food){
    //     System.out.println(food+"를 먹고있어요.");
    // }
//  ***** Case2. 필드가 private 인 경우
    private String name;
    private int age;

    // TODO(1) Person 클래스에서 매개변수를 받아서 name, age 초기화
    // TODO(2) Student 생성자 내부 변경해보기
    public Person(String name, int age){
        setAge(age);
        setName(name);
    }

    // 필드에 대한 getter 와 setter
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }
    public void setAge(int age){
        // if(음수가 온다면) age를 0으로 설정
        this.age=age;
    }
    // 일반 메소드
    public void say(){
        System.out.println("안녕하세요");
    }

    public void eat(String food){
        System.out.println(food+"를 먹고있어요.");
    }

}
