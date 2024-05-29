package lecture.spring_boot_jpa.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity // 해당 클래스가 Entity임을 명시. 기본 생성자를 필요로 함.
@Table(name = "user") // user라는 테이블과 해당 클래스를 매핑
@Getter
@Builder // 전체 필드를 받는 생성자를 필요로 함.
@NoArgsConstructor
@AllArgsConstructor
// Entity 와 Builder를 동시에 사용하게 될 경우, 해당 어노테이션이 필요로 하는 생성자들을 명시
public class UserEntity {
    @Id // PK primary key 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment 옵션
    private int id;

    @Column(name = "name", nullable = false, length = 10)
    private String name;

    @Column(name = "nickname", nullable = false, length = 20)
    private String nickname;
}
