package _02_control_statement;

import java.util.Scanner;

public class Conditional {
    public static void main(String[] args) {
        int number = 10;

        // if ~ else
        if (number % 2 == 0) {
            System.out.println("짝수");
        } else {
            System.out.println("홀수");
        }

        // if ~ else if
        if (number % 3 == 0) {
            System.out.println("3의 배수");
        } else if (number % 5 == 0) {
            System.out.println("5의 배수");
        } else {
            System.out.println("3의 배수, 5의 배수가 아닙니다.");
        }

        // switch 문
        String dayOfWeek;
        int day = 1;
        switch (day) {
            case 1:
                dayOfWeek = "일요일";
                break;
            case 2:
                dayOfWeek = "월요일";
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                dayOfWeek = "화,수,목,금,토";
                break;
            default:
                dayOfWeek = "잘못된 입력이예요.";
                break;
        }
        System.out.println("오늘은 " + dayOfWeek + "입니다.");

        //     /// String 비교해보기
        System.out.println("이름을 입력해주세요.");
        Scanner scan = new Scanner(System.in);
        String name = scan.next();
        scan.close();
        System.out.println("이름 확인: " + name);

        System.out.println(name == "allie"); // false
        System.out.println(name.equals("allie")); // true

        // 
        String str1 = "hello, world!"; // 문자열 리터럴
        String str2 = "hello, world!";
        System.out.println("hello world 비교" + (str1 == str2)); // true
        System.out.println("hello world 비교" + (str1.equals(str2))); // true
        /*
         * 비교 연산자(==)는 두 객체의 값을 비교하는게 아닌, "주소"(메모리 위치)를 비교함
         * .equals 메서드는 두 객체의 "내용"이 동일한지 비교
         *
         * 동일한 문자열 리터럴이 사용될 경우, JAVA 는 string pool 이라는 메모리영역에 문자열을 저장
         * str1과 str2는 같은 문자열이므로 공유된 메모리 영역에 문자열이 저장됨
         * '==' 연산자로 비교했을 때 메모리 주소가 똑같기 때문에 true
         *  */

        String str3 = new String("hello, world!");
        String str4 = new String("hello, world!"); // 문자열 객체

        if (str3 == str4) {
            System.out.println("같은 주소값입니다.");
        } else {
            System.out.println("다른 주소값입니다.");
        }

        if (str3.equals(str4)) {
            System.out.println("내용이 같습니다.");
        } else {
            System.out.println("내용이 다릅니다.");
        }

    }
}
