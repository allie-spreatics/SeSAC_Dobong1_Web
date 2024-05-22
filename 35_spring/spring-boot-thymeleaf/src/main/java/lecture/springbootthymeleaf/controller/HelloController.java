package lecture.springbootthymeleaf.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
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
    public String prac01(Model model) {
        model.addAttribute("age", 15);
        return "prac01";
    }

    @GetMapping("/prac/2")
    public String prac02(Model model) {
        ArrayList<Person> persons = new ArrayList<Person>();
        persons.add(new Person("kim", 10));
        persons.add(new Person("lee", 20));

        model.addAttribute("persons", persons);
        return "prac02";
    }


    @AllArgsConstructor
    @Getter
    class Person {
        private String name;
        private int age;

        // public Person(String name, int age) {
        //     this.name = name;
        //     this.age = age;
        // }
        //
        // public String getName() {
        //     return name;
        // }
        //
        // public int getAge() {
        //     return age;
        // }
    }

    class Hello {
        private String msg = "hi";

        public String getMsg() {
            return msg;
        }
    }
}
