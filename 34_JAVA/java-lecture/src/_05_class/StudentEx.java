package _05_class;

// Student 클래스 사용
public class StudentEx {
    public static void main(String[] args) {
        Student s1 = new Student("allie", 1);
        /*
         * s1={
         *   name: "allie",
         *   grade: 1,
         *  ... 하위 메소드들
         * }
         *  */
        System.out.println(s1); // _05_class.Student@3b07d329
        System.out.println(s1.toString()); // Student {name="allie", grade=1} (재정의)

        // 반환값 없이 출력만 해주는 메소드
        s1.goToSchool();
        s1.study("Java");

        //     반환값 있는 메소드
        System.out.println(s1.getGrade());
        System.out.println(s1.getTestResult(100));

        Student s2 = new Student("Rumon", 2);
        System.out.println(s2);
        System.out.println("s2인스턴스의 이름: " + s2.name);
        System.out.println("s2인스턴스의 학년: " + s2.grade);


    }
}
