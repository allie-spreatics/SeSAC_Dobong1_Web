package _05_class.c_final;

// 01_final 변수 사용해보기
public class FinalVariableEx {
    public static void main(String[] args) {
        final int finalNumber = 10;
        // finalNumber = 20; // read only이기 때문에 변경 불가능
        System.out.println("final number " + finalNumber);

    }
}
