package lecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


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
}
