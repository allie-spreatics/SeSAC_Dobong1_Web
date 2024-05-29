package lecture.spring_boot_jpa.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserCreateDTO {
    private String name;
    private String nickname;
}