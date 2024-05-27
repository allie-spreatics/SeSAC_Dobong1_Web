package lecture.spring_boot_mybatis.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder // builer 패턴을 이용하여 객체를 생성하는 것을 도와주는 도구
// 전체 필드를 인자로 받는 생성자를 자동으로 생성
public class BoardDTO {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
    private String no;
}
