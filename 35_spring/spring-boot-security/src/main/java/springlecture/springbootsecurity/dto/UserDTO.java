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
}
