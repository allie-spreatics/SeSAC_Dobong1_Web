package _03_array;

import java.util.Arrays;
import java.util.Collections;

public class ArrayEx {
    public static void main(String[] args) {
        //     배열 선언
        // 1. 타입[] 변수이름; <- 관례적으로 이 방법 더 많이 사용
        // 2. 타입 변수이름[];
        int[] arr1;
        int arr2[];

        String[] temp = null; // 참조형 타입, null 로 초기화 할 수 있음.
        // System.out.println(temp);
        // System.out.println(temp[0]);

        int[] intArray = {10, 22, 25, 44, 55};
        System.out.println("intArray 의 0번 인덱스: " + intArray[0]); // 10
        System.out.println("intArray: " + intArray); // [I@6d03e736
        intArray[1] = 20;
        System.out.println("intArray: " + Arrays.toString(intArray)); // 실제로 변경이 됩니다. [10, 20, 25, 44, 55]

        char[] charArray;
        // charArray = {'A', 'a'}; // compile error. 선언시 초기화 안했을 때,
        charArray = new char[]{'A', 'a', '2', 66};
        System.out.println(charArray[2]); // 2
        System.out.println(charArray[3]); // B

        //     //////
        double[] doubleArray = new double[3];
        System.out.println(Arrays.toString(doubleArray)); // [0.0, 0.0, 0.0]
        doubleArray[0] = 0.1;
        doubleArray[1] = 0.5;
        doubleArray[2] = 0.7;
        // doubleArray[3] = 0.8; // ArrayIndexOutOfBoundsException
        System.out.println("변경 후: " + Arrays.toString(doubleArray)); // [0.1, 0.5, 0.7]

        //     ///////// 다차원 배열
        // 배열 생성과 초기화 (2X3)
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}};
        System.out.println("이차원 배열1: " + matrix[0][0]); // 1

        // 배열 생성과 초기화 (3X2)
        int[][] matrix2 = new int[3][2]; // [[0,0],[0,0],[0,0]]
        System.out.println("이차원 배열2: " + matrix2[0][0]); // 0
        matrix2[0][0] = 1;
        matrix2[0][1] = 2;
        matrix2[1][0] = 3;
        matrix2[1][1] = 4;
        matrix2[2][0] = 5;
        matrix2[2][1] = 6;

        //     이중 포문을 이용해서 배열의 모든 요소 확인 (matrix2 만 확인)
        System.out.println("matrix2의 length: " + matrix2.length);
        for (int i = 0; i < matrix2.length; i++) {
            for (int j = 0; j < matrix2[i].length; j++) {
                System.out.println("matrix[i][j]: " + matrix2[i][j]);
            }
        }

        //     객체를 참조하는 배열
        String[] langs = new String[3];
        System.out.println(Arrays.toString(langs));
        langs[0] = "java";
        langs[1] = "java";
        langs[2] = new String("java");
        System.out.println(Arrays.toString(langs));

        System.out.println(langs[0] == langs[1]); // 두 요소 모두 리터럴 방식 비교, true
        System.out.println(langs[0] == langs[2]); // 리터럴 방식과 객체 방식 비교, false
        System.out.println(langs[0].equals(langs[2])); // true

        //     ///////// 배열 복사
        // - 배열은 초기화/선언과 동시에 크기가 고정됨
        // - 더 많은 저장공간이 필요할 때, 더 큰 길이의 배열을 "새로" 만들어 기존 배열을 "복사"한다!

        int[] originArray = {1, 2, 3};
        int[] newArray = new int[5]; // 기존 배열의 크기를 키우기 위해서 새로운 배열 선언
        System.out.println(Arrays.toString(newArray)); // [0, 0, 0, 0, 0]
        // ver1. for 문 사용
        for (int i = 0; i < originArray.length; i++) {
            newArray[i] = originArray[i];
        }
        System.out.println("복사 후: " + Arrays.toString(newArray)); // [1, 2, 3, 0, 0]


        // ver2. 기본 메서드 사용 arraycopy()
        // System.arraycopy(src, srcPos, dest, destPos, length)
        /*
         * Object src: 원본 배열 (originArray)
         * int srcPos: 원본배열 복사 시작 인덱스
         * Object dest: 새로운 배열 (newArray)
         * int destPos: 새 배열 붙여넣기 시작 인덱스
         * int length: 복사할 항목의 개수
         *  */
        String[] originFruits = {"apple", "banana", "coconut"};
        String[] newFruits = new String[5];
        System.out.println(Arrays.toString(newFruits)); // [null, null, null, null, null]
        // System.arraycopy(originFruits, 0, newFruits, 0, originFruits.length);
        // System.arraycopy(originFruits, 0, newFruits, 0, originFruits.length - 1);
        System.arraycopy(originFruits, 0, newFruits, 2, originFruits.length - 1);
        // [null, null, "banana", "coconut", null]
        System.out.println("after copy: " + Arrays.toString(newFruits)); //

        // ///////////// Arrays 내장 메소드 확인
        // Arrays import 필수!!!!
        // 1. Arrays.copyOf(): 원본배열의 처음부터 지정한 길이만큼 복사
        int[] originArr = {1, 2, 3, 4, 5};
        int[] copiedArr = Arrays.copyOf(originArr, 3);
        int[] copiedArr2 = Arrays.copyOf(originArr, 6);

        System.out.println("copiedArr >> " + Arrays.toString(copiedArr)); // [1,2,3]
        System.out.println("copiedArr2 >> " + Arrays.toString(copiedArr2)); // [1, 2, 3, 4, 5, 0]

        // 2. Arrays.copyOfRange(OriginArr, startIndex, endIndex) : startIndex<= < endIndex
        int[] rangeArray = Arrays.copyOfRange(originArr, 1, 4); //[2,3,4]
        System.out.println("Range array>> " + Arrays.toString(rangeArray));

        // 3. Arrays.fill(arr, val): arr 의 모든 요소를 val 로 채움
        int[] filledArr = new int[5];
        Arrays.fill(filledArr, 10);
        System.out.println("after fill>> " + Arrays.toString(filledArr));

        // 4. Arrays.sort(arr): arr 를 오름차순으로 정렬
        int[] unsortedArray = {5, 31, 2, 10, 55, 3};
        Integer[] unsortedArray2 = {5, 31, 2, 10, 55, 3};

        Arrays.sort(unsortedArray);
        // System.out.println(Arrays.sort(unsortedArray)); // sort: void
        Arrays.sort(unsortedArray);
        Arrays.sort(unsortedArray2, Collections.reverseOrder()); // 내림차순 정렬 가능
        System.out.println("내림차순: " + Arrays.toString(unsortedArray2)); // [55, 31, 10, 5, 3, 2]
        System.out.println("after sort>> " + Arrays.toString(unsortedArray)); // [2, 3, 5, 10, 31, 55]

        // 5. Arrays.equals(arr1, arr2)
        // 배열의 주소가 아닌 배열의 요소 비교
        int[] array1 = {1, 2, 3};
        int[] array2 = {1, 2, 3};
        int[] array3 = {1, 2, 4};
        // == 등호 이용해서 배열 비교 (배열의 주소 비교)
        System.out.println("Array == (1 & 2)" + (array1 == array2)); // false
        System.out.println("Array == (1 & 3)" + (array1 == array3)); // false

        // Arrays.equals 이용해서 배열을 비교 (배열의 순서에 대한 값 비교)
        System.out.println("Array.equals() (1 & 2)" + Arrays.equals(array1, array2)); // true
        System.out.println("Array.equals() (1 & 2)" + Arrays.equals(array1, array3)); // false

        // 6. Arrays.deepEquals(arr1, arr2)
        // vs. Arrays.equals()?
        // 배열의 요소가 값이 아닌 주소로 비교해야 될 때
        int[][] deepArray1 = {{1, 2}, {3, 4}};
        int[][] deepArray2 = {{1, 2}, {3, 4}};
        int[][] deepArray3 = {{1, 2}, {3, 5}};
        System.out.println("===== deep equals 사용 =====");
        System.out.println("Array.equals() (1 & 2)" + Arrays.equals(deepArray1, deepArray2)); // false
        System.out.println("Array.deepEquals() (1 & 2)" + Arrays.deepEquals(deepArray1, deepArray2)); // true
        System.out.println("Array.deepEquals() (1 & 3)" + Arrays.deepEquals(deepArray1, deepArray3)); // false

        // 7. binarySearch(arr, val), 이 때의 arr 는 정렬되어 있어야 함
        // 오름차순/내림차순 상관 없음
        int[] sortedArray = {10, 21, 35, 49, 57};
        int index = Arrays.binarySearch(sortedArray, 35);
        int index2 = Arrays.binarySearch(sortedArray, 60);
        System.out.println("index of 35: " + index); // 2
        System.out.println("index of 60: " + index2); // -6 (-6이 고정되어 있는 값이 아닌 무작위 음수값 반환)


        System.out.println();
    }
}
