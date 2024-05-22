package lecture.springbootthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HelloController {

    // localhost:8080/hi
    @GetMapping("/hi")
    public String hello(Model model) {


        Hello hello = new Hello();
        String[] fruits = {"apple", "banana", "grape"};
        model.addAttribute("msg", "hi~~~");
        model.addAttribute("msg2", "<strong>안녕?</strong>");
        model.addAttribute("age", 17);
        model.addAttribute("userType", "Admin"); // Admin, User, 그 외
        model.addAttribute("fruits", fruits);
        model.addAttribute("url", "https://www.google.co.kr");
        model.addAttribute("hello", hello);


        return "hi";
    }

    @GetMapping("/prac/1")
    public String prac01() {
        return "";
    }

    @GetMapping("/prac/2")
    public String prac02() {
        return "";
    }
    
    class Hello {
        private String msg = "hi";

        public String getMsg() {
            return msg;
        }
    }
}
