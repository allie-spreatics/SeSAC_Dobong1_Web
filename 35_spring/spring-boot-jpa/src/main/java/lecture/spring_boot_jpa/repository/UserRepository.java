package lecture.spring_boot_jpa.repository;

import lecture.spring_boot_jpa.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// JpaRepository<entity class, 테이블의 pk 자료형>
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    // List<UserEntity> findAll();
    List<UserEntity> findByName(String name);
}
