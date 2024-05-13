package _02_control_statement;

/*
 * 메소드 오버로딩?
 * - 하나의 클래스에서 동일한 이름의 메서드를 여러 개 정의할 수 있음
 * - 함수의 이름은 같지만 매개변수의 타입, 개수, 순서, 리턴타입 등을 다르게 해서 선언할 수 있음
 * - 함수의 동작이 유사할 때 사용
 *  */
public class MethodOverloading {
    public static void main(String[] args) {
        MethodOverloading ol = new MethodOverloading();
        //     static이 아닌 메서드를 사용하기 위해서는 인스턴스를 생성하고 사용해야 함
        System.out.println("정수 두 개 덧셈: " + ol.add(1, 2));
        System.out.println("실수 두 개 덧셈: " + ol.add(1.1, 2.3));
        System.out.println("정수 세 개 덧셈: " + ol.add(1, 2, 3));
        System.out.println("실수 세 개 덧셈: " + ol.add(1.1, 2.1, 3.3));

        System.out.println("실수 세개 덧셈?: " + ol.add(1.1, 2.2, 4.4));// 기댓값: 7.7
        //     실제 결과: 7.700000000000001 (부동 소수의 한계)

        System.out.println("=====참고: printf 사용=====");
        System.out.printf("%d 곱하기 %d = %d", 10, 3, 10 * 3).println();
        System.out.println(10 + " 곱하기 " + 3 + " = " + (3 * 10));
    }

    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public double add(double a, double b, double c) {
        return a + b + c;
    }
}
