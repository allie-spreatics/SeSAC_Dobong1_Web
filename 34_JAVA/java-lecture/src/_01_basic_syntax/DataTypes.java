package _01_basic_syntax;

public class DataTypes {
    public static void main(String[] args) {
        System.out.println("-------primitive type--------");

        // 정수형 변수 선언
        int a = 11;
        long b = 100000000L; // long 타입은 뒤에 'L'을 붙여야 함
        short c = 30000;
        byte d = 127;

        // 실수형 변수 선언
        float e = 3.14f; // float 타입은 뒤에 'f'를 붙여야 함
        double f = 2.77777;

        // 문자형 변수 선언
        char ch = 'A';
        // 논리형 변수 선언
        boolean bool = true;
        System.out.println("정수형 변수: " + a + " " + b + " " + c + " " + d);
        System.out.println("실수형 변수: " + e + " " + f);
        System.out.println("문자형 변수: " + ch);
        System.out.println("논리형 변수: " + bool);

        System.out.println("======= reference type ======");
        // 1. primitive 에 있는 자료형
        // 굳이 필요한 경우가 아니라면 primitive 형 사용
        /*Integer aa=11;
        Long bb=10L;
        Short cc=-1280;
        Byte dd=-128;
        Float ee = 1.1f;
        Double ff = 1.2;
        Character chch ='A';
        Boolean boo = false;*/

        // 2. primitive에 없는 자료형
        String greeting = "hello, world!"; // 문자열
        int[] numbers = {1, 2, 3, 4, 5}; // 배열
        Person person = new Person("allie", 22);

        System.out.println("String 변수: " + greeting);

        // for문과 배열 함께사용하기
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + ", ");
        }
        System.out.println();
        // for문 ver2. for each 문
        System.out.println("for each문 사용해보기");
        for (int num : numbers) {
            System.out.print(num + " ");
        }
        System.out.println();
        System.out.println("Person 객체: " + person.getName());
        System.out.println("Person 객체: " + person.getAge());
    }
}

// class (나중에 배울 예정. )
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}