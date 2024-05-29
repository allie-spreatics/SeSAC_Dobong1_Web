package lecture.spring_boot_jpa.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ResErrorDTO {
    private String error;
}
