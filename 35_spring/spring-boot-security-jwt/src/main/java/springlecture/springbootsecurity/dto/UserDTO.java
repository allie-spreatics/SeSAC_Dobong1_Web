package springlecture.springbootsecurity.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
//@Setter
@Builder
public class UserDTO {
    private String email;
    private String username;
    private String password;
    private Long id;
    private String token; // 로그인 응답으로 token 을 전송하기 위함.
}
