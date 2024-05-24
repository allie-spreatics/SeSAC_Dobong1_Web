package lecture.springbootthymeleaf.controller;

import lecture.springbootthymeleaf.dto.UserDTO;
import lecture.springbootthymeleaf.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.stream.IntStream;


// localhost:8080/api/~~~~~~
@Controller
@RequestMapping("/api")
public class ApiController {

    // 컨트롤러에서 에러가 발생할 경우, ExceptionHandler가 catch 하여 해당 로직 처리
    @ExceptionHandler
    public String errHandler(Exception e) {
        System.out.println("error: " + e.getMessage());
        return "error";
    }

    // GET localhost:8080/api
    @GetMapping("")
    public String get() {
        return "api";
    }

    // GET localhost:8080/api/res1?name={name}&age={age}
    // @GetMapping("/res1")
    // public String getRes1(
    //         @RequestParam String name,
    //         @RequestParam int age,
    //         Model model) {
    //     model.addAttribute("name", name);
    //     model.addAttribute("age", age);
    //     return "res";
    // }
    // ?name=lily&age=88
    // ?name=lily
    @GetMapping("/res1")
    public String getRes1(
            @RequestParam(value = "name") String nickname,
            @RequestParam(required = false, value = "age") Integer age,
            Model model) {
        model.addAttribute("name", nickname);
        model.addAttribute("age", age);
        return "res";
    }

    // GET localhost:8080/api/res2/{name}/{age}
    @GetMapping({"/res2/{name}", "/res2/{name}/{param2}"})
    public String getRes2(
            @PathVariable String name,
            @PathVariable(value = "param2", required = false) Integer age,
            Model model
    ) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    // POST localhost:8080/api/res3 (name, age)
    @PostMapping("/res3")
    public String postRes(
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    @PostMapping("/res3/{param1}")
    public String postRes2(
            @PathVariable String param1,
            @RequestParam String name,
            @RequestParam int age,
            Model model) {
        System.out.println("param1: " + param1);
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "res";
    }

    @GetMapping("/res4")
    @ResponseBody
    public String getRes4() {
        return "hello";
    }

    // GET ~~~~:8080/api/prac/2
    @GetMapping("/prac/2")
    public String prac2View(Model model) {
        int[] years = IntStream.rangeClosed(1970, 2024).toArray();
        int[] months = IntStream.rangeClosed(1, 12).toArray();
        int[] dates = IntStream.rangeClosed(1, 31).toArray();

        model.addAttribute("birthYear", years);
        model.addAttribute("birthMonth", months);
        model.addAttribute("birthDate", dates);

        return "apiPrac02";
    }

    @PostMapping("/prac/2")
    public String prac2Res(
            @RequestParam String name,
            @RequestParam String gender,
            @RequestParam int birthYear,
            @RequestParam int birthMonth,
            @RequestParam int birthDate,
            @RequestParam String[] interests,
            Model model) {

        String interest = String.join(",", interests);

        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("birthYear", birthYear);
        model.addAttribute("birthMonth", birthMonth);
        model.addAttribute("birthDate", birthDate);
        model.addAttribute("interests", interest);

        return "apiPrac02Res";
    }

    @PostMapping("/res4")
    public String postRes4(
            @ModelAttribute UserDTO user,
            Model model) {
        // @ModelAttribute
        // 객체로 데이터를 전송받게끔 도와줌. 해당 객체의 setter를 이용해서 데이터를 매핑시킴
        // url에 있는 데이터를 매핑
        // 생략 가능
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    @PostMapping("/res5")
    public String postRes5(
            @ModelAttribute UserVO user,
            Model model) {
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    @GetMapping("/res6")
    public String postRes6(
            @ModelAttribute UserDTO user,
            Model model) {
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    // --------------------- @RequsetBody ------------------
    @GetMapping("/res7")
    public String postRes7(
            @RequestBody UserDTO user,
            Model model) {
        // 오류가 남. Why? body 자체가 없음. get 요청이기 때문에
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }

    @PostMapping("/res8")
    public String postRes8(
            @RequestBody UserDTO user,
            Model model) {
        // 오류가 남. Why? 일반 폼 전송의 Content-Type은 application/x-www-form-urlencoded 이기 때문에
        // @RequestBody는 application/json 형태의 Content-Type을 매핑시킬 수 있음.
        model.addAttribute("name", user.getName());
        model.addAttribute("age", user.getAge());
        return "res";
    }  // vo로 테스트 해봐도 둘 다 오류 날 예정


    @PostMapping("/res9")
    @ResponseBody
    public String postRes9(@RequestBody UserDTO user) {
        return user.getName() + "님 환영합니다.";
    }

    @PostMapping("/res10")
    @ResponseBody
    public String postRes10(@RequestBody UserVO user) {
        // @RequestBody 은 dto 객체의 setter를 이용해서 매핑시키는 게 아닌,
        // RequestBody 자체적으로 가지고 있는 메소드로 매핑을 시킴.
        return user.getName() + "님 환영합니다.";
    }
}
