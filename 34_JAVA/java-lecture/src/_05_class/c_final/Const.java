package _05_class.c_final;

// 02_static final vs. only static vs. only final
public class Const {
    public static final int MAX_VALUE = 100;
    public static final String GREETING = "Hello, World!";

    //     only static
    static int MIN_VALUE = 0; // 수정 가능

    //     only final
    //     인스턴스에 속해있는 변수
    final String name = "allie";
}
