package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.UserDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/restapi")
public class RestApiController {

    @GetMapping("/user")
    public String get() {
        String name = "lily";
        int age = 88;
        return name + "," + age;
    }

    @PostMapping("/user")
    public String post(@RequestBody UserDTO user) {
        // model 연결 후 db 삽입
        return user.getName() + "," + user.getAge();
    }

    @PatchMapping("/user/{id}")
    public String patch(@PathVariable int id, @RequestBody UserDTO user) {
        // model 연결 후 db 수정
        return id + "님의 정보 수정: " + user.getName() + "," + user.getAge();
    }

    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id) {
        // model 연결 후 db 삭제
        return id + "님의 정보 삭제";
    }
}
