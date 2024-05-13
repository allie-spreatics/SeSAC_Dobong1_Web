package _02_control_statement;

import java.util.ArrayList;
import java.util.List;

public class Loop {
    public static void main(String[] args) {
        // 기본 for 문
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }

        // while 문
        int i = 1;
        System.out.println("while 문");
        while (i <= 10) {
            System.out.println(i);
            i++;
        }

        // do - while 문
        // - 적어도 한 번은 실행되는 반복문
        System.out.println("do-while 문");
        int j = 1;
        do {
            System.out.println(j); // 일단 do를 실행합니다.
            j++;
        } while (j <= 10); // 조건 검사를 나중에 합니다.

        //     ////// 배열과 for문 작성
        //     for ~ each 문
        String[] arr = {"A", "B", "C"}; // string 타입의 배열
        // for(변수 선언:배열){실행문}
        for (String str : arr) {
            System.out.println("str: " + str);
        }

        //     arraylist
        List<String> list = new ArrayList<String>(); // 리스트 중에 array list
        list.add("A"); // arraylist 에 추가하는 법: add() 사용
        list.add("B");
        list.add("C"); // list = ["A","B","C"]
        for (String str : list) {
            System.out.println("list str: " + str);
        }

        //     foreach with lamda (익명함수! ()-> {})
        list.forEach(data -> System.out.println("data: " + data));
    }
}
