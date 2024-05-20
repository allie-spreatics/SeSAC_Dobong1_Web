package _05_class.e_abstract;

public class Square extends Shape{
    private String type; // 정사각형, 직사각형, 마름모, .. 사각형의 종류

    public Square(String type, String color){
        super(color);
        //     type 의 setter 를 통해서 type 값 초기화
        this.type = type;
    }

    @Override
    void draw(){
        System.out.println(type+" 그리기!");
    }

    public String getType(){
        return type;
    }

    public void setType(String type){
        this.type=type;
    }

//     square 만의 추가메소드 생성
    void showType(){
        System.out.printf("사각형의 종류는 %s 입니다!! %n", type);
    }

}
