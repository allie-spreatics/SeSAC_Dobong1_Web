package _05_class.a_access_modifier.pack3;

public class B {
    public static void main(String[] args) {
        A a = new A(); // 같은 패키지 내의 클래스 A

        System.out.println(a.field1);
        System.out.println(a.field2);
        // System.out.println(a.field3); // private 필드는 같은 패키지라도 접근 불가

        a.field1 = 11;
        a.field2 = 22;
        System.out.println(a.field2);

        a.method1();
        a.method2();
        // a.method3();
    }
}
