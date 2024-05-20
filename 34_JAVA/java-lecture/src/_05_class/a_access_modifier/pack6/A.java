package _05_class.a_access_modifier.pack6;
/* 
* protected
* - 같은 패키지: default 처럼 동작, 모두에게 접근 허용
* - 다른 패키지: 자식 클래스만 접근 허용
*  */
public class A {
    protected int field1;
    protected A(){}
    protected void methodA(){}
}
