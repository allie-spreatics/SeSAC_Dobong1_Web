package _05_class.c_final;

// 04_final 심화
public class FinalUpgrade {
    public static void main(String[] args) {
        FinalMethod obj = new FinalMethod();
        obj.showMessage();
        SubClass obj2 = new SubClass();
        obj2.showMessage();
    }
}

class FinalMethod {
    final void showMessage() {
        System.out.println("final 이 붙은 이 메소드는 오버라이딩 할 수 없습니다!!");
    }
}

class SubClass extends FinalMethod {
    //     메소드 재정의
    // void showMessage() {} // final 키워드가 붙은 메소드의 경우 오버라이딩 불가(메소드 재정의 불가)
}

//======== 클래스에 final 키워드 사용할 수 있음
final class FinalClass {
}

// 클래스에 final 이 붙은 경우에는 자식클래스에게 상속 불가능
// class SubClass2 extends FinalClass {
// }