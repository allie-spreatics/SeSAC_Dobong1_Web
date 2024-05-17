package _05_class;

public class Puppy {
    // 생성자는 생략 가능
    // 생성자의 파라미터로 아무 값도 받지 않고, 필드 초기화 하지 않아도 될때
    // public Puppy(){
    // }

    public void printInfo(String name) {
        System.out.println("name: " + name);
    }

    public void printInfo(String name, int age) {
        System.out.println("name: " + name);
        System.out.println("age: " + age);
    }

    public static void main(String[] args) {
        Puppy p1 = new Puppy();
        p1.printInfo("은동이");
        p1.printInfo("은동이", 12);
    }
}
