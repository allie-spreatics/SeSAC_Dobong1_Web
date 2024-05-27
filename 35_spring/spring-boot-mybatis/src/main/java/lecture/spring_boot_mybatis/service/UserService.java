package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.User;
import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.dto.UserDTO;
import lecture.spring_boot_mybatis.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserMapper userMapper;

    public List<UserDTO> getUserList() {
        List<User> result = userMapper.retrieveAll();
        List<UserDTO> users = new ArrayList<>();

        for(int i = 0; i<result.size(); i++) {
            UserDTO userDTO = new UserDTO();
            userDTO.setId(result.get(i).getId());
            userDTO.setName(result.get(i).getName());
            userDTO.setNickname(result.get(i).getNickname());
            userDTO.setNo(i+1);

            users.add(userDTO);
        }

        return users;
    }

    public void insertUser(UserCreateDTO user) {
        userMapper.insertUser(user);
    }

    public void updateUser(int id, UserCreateDTO user) {
        User updateUser = new User();

        updateUser.setId(id);
        updateUser.setNickname(user.getName());
        updateUser.setNickname(user.getNickname());

        userMapper.updateUser(updateUser);
    }

    public  void deleteUser(int id) {
        userMapper.deleteUser(id);
    }
}
