package _05_class.d_inheritance;

public class StudentEx {
    public static void main(String[] args) {
    //     부모 자식 필드가 public 인 경우
    //     Student std1 = new Student("앨리",20,"도봉");
    //     System.out.println(std1.name);
    //     System.out.println(std1.age);
    //     System.out.println(std1.campus);
    //     std1.setCampus("Dobong"); // 자식 클래스인 Student 의 메소드
    //
    //     // 부모클래스인 Person 에게 상속받은 메소드
    //     std1.say();
    //     std1.eat("바나나");

        Student std2=new Student("앨리", 22);
            // System.out.println(std1.name); // private 직접 접근 불가능
            // System.out.println(std1.age);
            // System.out.println(std1.campus);
        System.out.println(std2.getName());
        System.out.println(std2.getAge());
        System.out.println(std2.getCampus()); // null, 생성자로 설정하지 않았음
        std2.setCampus("도봉");
        std2.say();
        std2.eat("사과");
    }
}
