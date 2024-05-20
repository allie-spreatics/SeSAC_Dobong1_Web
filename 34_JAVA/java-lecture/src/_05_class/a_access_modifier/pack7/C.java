package _05_class.a_access_modifier.pack7;

import _05_class.a_access_modifier.pack6.A;

// A 클래스를 상속받지 않은 외부 클래스
public class C {
    void methodC(){
        // A a=new A(); // import 를 해도 protected 접근제한자는 접근 불가능
        // a.field1=12;
        // a.methodA();
    }
    
}
