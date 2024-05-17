package _05_class.a_access_modifier.pack2;


import _05_class.a_access_modifier.pack1.B;

public class C {
    // A a; // 접근제한자 default 를 가진 A 클래스에 접근할 수 없음 (다른 패키지이기 때문에)
    B b; // 접근 제한자 public 을 가진 B 클래스, 어디서든, import 한다면 사용 가능

    /*
     * C 클래스는 A, B 클래스와 다른 패키지에 있으므로
     * default 제한자인 A 클래스에서는 에러가 발생
     * public 제한자인 B 클래스에서는 정상 동작
     *
     *  */
}
