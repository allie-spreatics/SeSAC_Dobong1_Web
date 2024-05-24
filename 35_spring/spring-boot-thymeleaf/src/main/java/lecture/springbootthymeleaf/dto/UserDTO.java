package lecture.springbootthymeleaf.dto;


import lombok.Getter;
import lombok.Setter;

@Getter // 모든 필드에 대해 getter를 자동으로 생성
@Setter // setter를 자동으로 생성
public class UserDTO {
    private String name;
    private int age;
}
