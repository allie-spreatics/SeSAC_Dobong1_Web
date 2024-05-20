package _05_class.a_access_modifier.pack7;

import _05_class.a_access_modifier.pack6.A;

// 외부 패키지에 있는 클래스이지만
// A 클래스를 상속받는 클래스
public class D extends A {
     public D(){
        // super(); // 생성자 부르기
        this.field1=11;
        this.methodA();
    }
}
