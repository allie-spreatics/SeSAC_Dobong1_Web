package _05_class.b_static;

public class CalculatorEx {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        // [인스턴스.필드명] 으로 접근하는게 아닌 [클래스.필드명]으로 접근
        double circleArea = num1 * num1 * Calculator.pi;

        int plusResult = Calculator.plus(num1, num2);
        int minusResult = Calculator.minus(num1, num2);
        double lengthCircleResult = Calculator.circumference(num1);

        System.out.println("원의 넓이: " + circleArea);
        System.out.println("원의 둘레: " + lengthCircleResult);
        System.out.println("덧셈 결과: " + plusResult);
        System.out.println("뺄셈 결과: " + minusResult);

    }
}
