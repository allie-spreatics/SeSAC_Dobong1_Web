package lecture.spring_boot_jpa.repository;

import lecture.spring_boot_jpa.entity.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
    // Optional<BoardEntity> findById(int id);
}
