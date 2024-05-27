package lecture.spring_boot_mybatis.dto;

import lombok.*;

@Getter
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DefaultResDTO {
    private boolean result;
    private String errMsg;
}
