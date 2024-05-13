package _02_control_statement;

import java.util.Arrays;

public class Method {
    public static void main(String[] args) {
        hello();
        //     반환값 있는 메서드 사용
        System.out.println(sum(5, 10));
        System.out.println(connect("안녕", "하세요"));

        int number = 5; // primitive type
        int[] numbers = {10, 20}; // reference type
        int[] numbers2 = {10, 20, 30}; // reference type

        //     === call by value
        System.out.println("원래 number 확인: " + number);
        System.out.println("함수의 리턴값 확인: " + multi_10(number));
        System.out.println("함수를 거치고 난 후 number: " + number);

        //     === call by address
        System.out.println("== call by address ==");
        // 주소값 확인
        System.out.println(numbers); //[I@58372a00
        System.out.println(multi_10_2(numbers)); //[I@58372a00

        //     실행 후 결과 확인
        System.out.println("원래 numbers2 확인: " + Arrays.toString(numbers2));
        System.out.println("함수의 리턴값: " + Arrays.toString(multi_10_2(numbers2)));
        System.out.println("함수를 거치고 난 후 numbers2: " + Arrays.toString(numbers2));
    }

    // 반환값이 없는 메서드
    public static void hello() {
        System.out.println("hello");
    }

    // 반환값이 있는 메서드
    public static int sum(int x, int y) {
        // 함수의 리턴타입과 실제 리턴해주는 타입이 일치해야 합니다.
        return x + y;
    }

    public static String connect(String a, String b) {
        return a + b;
    }

    // call by value vs. call by address
    /*
     * call by value
     *  - primitive 타입을 함수의 인자로 전달
     *  - 실제 "값"을 함수로 전달하는 것, 원래의 값은 변경되지 않음
     *
     * call by address
     *  - reference 타입을 함수의 인자로 전달
     *  - 변수가 저장되어있는 "주소"를 전달
     *  - 함수 내부에서 전달된 변수를 변경한다면 실제 변수도 변경됨
     *   - 같은 주소 참조
     *  */


    public static int multi_10(int x) {
        // call by value
        x = x * 10;
        return x;
    }

    public static int[] multi_10_2(int[] numbers) {
        // call by address
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] * 10;
        }
        return numbers;
    }
}
