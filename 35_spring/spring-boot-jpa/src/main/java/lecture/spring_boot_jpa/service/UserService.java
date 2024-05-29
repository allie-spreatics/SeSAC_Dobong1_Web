package lecture.spring_boot_jpa.service;

import lecture.spring_boot_jpa.dto.UserCreateDTO;
import lecture.spring_boot_jpa.entity.UserEntity;
import lecture.spring_boot_jpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> getUsers() {
        return userRepository.findAll();
    }

    public List<UserEntity> getUsersByName(String name) {
        return userRepository.findByName(name);
    }

    public UserEntity getUserById(int id) {
        Optional<UserEntity> user = userRepository.findById(id);
        if (user.isPresent()) {
            // [optionalObj].isPresent() : null인지 아닌지 확인. null이 아니라면 true
            return user.get();
        } else {
            throw new RuntimeException("user doesn't exist");
        }
    }

    public UserEntity insertUser(UserCreateDTO user) {
        UserEntity newUser = UserEntity.builder()
            .name(user.getName())
            .nickname(user.getNickname())
            .build();
        // .save(엔티티 객체) : insert, update
        // pk 가 없다면, insert
        // pk 가 있다면, update
        return userRepository.save(newUser);
    }

    public UserEntity updateUser(int id, UserCreateDTO user) {
        UserEntity userEntity = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("user doesn't exist"));
        // 조회된 값이 있다면, userEntity에 담고, 그렇지 않다면 RuntimeException 를 발생

        UserEntity updateUser = UserEntity.builder()
            .id(userEntity.getId())
            .name(user.getName())
            .nickname(user.getNickname())
            .build();
        // entity 객체 만들어서 pk값을 설정한 후 repository.save();
        return userRepository.save(updateUser);
    }

    public UserEntity deleteUser(int id) {
        UserEntity userEntity = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("user doesn't exist"));
        // userRepository.deleteById(id); // pk id로 삭제
        userRepository.delete(userEntity); // entity 정보로 삭제
        return userEntity;
    }
}
