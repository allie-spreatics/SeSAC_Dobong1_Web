package _05_class.a_access_modifier.pack3;

public class A {
    //     필드(field1, field2, field3)
    //     각각 public, default, private 형으로 선언
    public int field1;
    int field2;
    private int field3;

    // 생성자
    public A() {
        this.field1 = 1;
        this.field2 = 2;
        this.field3 = 3;

        method1();
        method2();
        method3();
    }

    //     메소드(method1, method2, method3)
    //     각각 public, default, private 형으로 선언
    public void method1() {
    }

    void method2() {
    }

    private void method3() {
    }

}
