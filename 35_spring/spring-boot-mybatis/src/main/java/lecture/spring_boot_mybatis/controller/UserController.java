package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.UserCreateDTO;
import lecture.spring_boot_mybatis.dto.UserDTO;
import lecture.spring_boot_mybatis.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("")
    @ResponseBody
    public List<UserDTO> getUsers(){
        return userService.getUserList();
    }

    @PostMapping("")
    @ResponseBody
    public Map<String, Boolean> insertUser(
            @RequestBody UserCreateDTO user
            ) {
        // User insert 로직
        userService.insertUser(user);

        Map<String, Boolean> result = new HashMap<String, Boolean>();
        result.put("result", true);
        // {result: true}
        return result;
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> patchUser(
            @PathVariable int id,
            @RequestBody UserCreateDTO user
    ) {
        Map<String, Boolean> result = new HashMap<String, Boolean>();

        try {
            userService.updateUser(id, user);
            result.put("result", true);
        } catch (Exception e) {
            result.put("result", false);
        }

        return result;
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public Map<String, Boolean> deleteUser() {
        Map<String, Boolean> result = new HashMap<String, Boolean>();

        try {
            // ???????????
            result.put("result", true);
        } catch (Exception e) {
            result.put("result", false);
        }

        return result;
    }
}
