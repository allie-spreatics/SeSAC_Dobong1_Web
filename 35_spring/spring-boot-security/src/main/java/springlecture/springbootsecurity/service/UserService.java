package springlecture.springbootsecurity.service;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springlecture.springbootsecurity.entity.UserEntity;
import springlecture.springbootsecurity.repository.UserRepository;

@Slf4j
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserEntity create(final UserEntity userEntity){
        if (userEntity == null || userEntity.getEmail() == null) {
            throw new RuntimeException("Invalid arguments");
        }

        final String email = userEntity.getEmail();

        if (userRepository.existsByEmail(email)) {
            log.warn("Email already exists {}", email);
            throw new RuntimeException("Email already exists");
        }

        // UserEntity 를 DB에 저장.
        // save를 했을 때 반환되는 객체는 Entity 객체
        return userRepository.save(userEntity);
    }

    public UserEntity getByCredentials(final String email, final String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}
