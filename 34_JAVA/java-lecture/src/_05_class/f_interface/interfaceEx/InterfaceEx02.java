package _05_class.f_interface.interfaceEx;

abstract  class MyAbstractClass{
    public abstract void abstractMethod();
}
interface MyInterface{
    // public abstract 가 생략되어있는 상태
    void interfaceMethod();
}


// 추상 클래스와 인터페이스를 조합해서 사용할 수도 있다.
public class InterfaceEx02 extends MyAbstractClass implements MyInterface {

    @Override
    public void abstractMethod(){
    //     구현내용은 sub class 에서 작성
    }

    @Override
    public void interfaceMethod(){
    //     구현내용은 sub class 에서 작성
    }

}
