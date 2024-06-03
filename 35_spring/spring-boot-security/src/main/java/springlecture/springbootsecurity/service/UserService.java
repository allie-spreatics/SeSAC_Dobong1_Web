package springlecture.springbootsecurity.service;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import springlecture.springbootsecurity.entity.UserEntity;
import springlecture.springbootsecurity.repository.UserRepository;

@Slf4j
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

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
        // [before] 패스워드 암호화 적용 전
        // return userRepository.findByEmailAndPassword(email, password);

        // [after] 패스워드 암호화 적용
        // matches(password, 비교할 암호화된 비밀번호)
        UserEntity user = userRepository.findByEmail(email);

        if(user != null && passwordEncoder.matches(password, user.getPassword())){
            return user;
        } else return null;
    }
}
