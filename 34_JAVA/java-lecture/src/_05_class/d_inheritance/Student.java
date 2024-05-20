package _05_class.d_inheritance;

public class Student extends Person{
    //  ***** Case1. 필드가 public 인 경우
    // public String campus; // Student 만의 필드

    // public Student(String name, int age, String campus){
        // 1-1. 부모 클래스가 기본 생성자(생성자에서 매개변수를 받아주지 않는)를 가지는 경우
        // super(); // Person 생성자 실행! (부모 생성자의 매개변수가 없을 때 생략 가능)
        // this.campus = campus;
        // this.age=age;
        // this.name = name;
        // System.out.println("Student 클래스의 생성자가 실행됐습니다.");

        // 1-2. 부모 클래스가 매개변수가 있는 생성자를 가지는 경우
        // Person(String name, int age) < Person 의 생성자를 super 가 호출 중
        // super(name, age); // 생략 불가능!
        // this.campus = campus;
        // System.out.println("Student 클래스의 생성자가 실행됐습니다.");
    // }

    // ***** Case1. 필드가 private 인 경우
    private String campus;
    public Student(String name, int age){
        // this.name = name;
        // this.age=age; // 부모 필드가 private 이기 때문에 접근 불가
        // super(); // 생략 가능
        // setter 를 이용해서 초기화시켜주기
        super(name, age);
        // super 내부에 setAge와 setName 이 있기 때문에 Student 생성자에서는 초기화하지 않아도 됨
        // setAge(age);
        // setName(name);
    }

    public String getCampus(){
        return this.campus;
    }
    public void setCampus(String campus){
        this.campus=campus;
        System.out.println(campus + "캠퍼스에서 공부중입니다.");
    }
}
