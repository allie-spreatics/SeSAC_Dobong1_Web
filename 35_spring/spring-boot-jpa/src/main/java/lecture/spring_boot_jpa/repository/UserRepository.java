package lecture.spring_boot_jpa.repository;

import lecture.spring_boot_jpa.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

// JpaRepository<entity class, 테이블의 pk 자료형>
@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    // List<UserEntity> findAll();
    List<UserEntity> findByName(String name);

    Optional<UserEntity> findById(int id);

    // raw query 이용
    // jpa 자체적인 sql(?) -> JPQL
    // JPQL : Java Persistence Query Language
    @Query("SELECT u FROM UserEntity u WHERE u.name = :name")
    // @Query(nativeQuery = true, value = "SELECT * FROM user WHERE name = :name")
    List<UserEntity> findByNameCustom(String name);

    @Query("SELECT u FROM UserEntity u JOIN FETCH u.todos t WHERE u.id = :userId")
    UserEntity findTodosByUser(int userId);

}
