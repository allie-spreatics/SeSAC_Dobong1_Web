package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
@Slf4j
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping("")
    public String boards(Model model){
        List<BoardDTO> boards = boardService.getBoards();
        model.addAttribute("boards", boards);
        return "board";
    }

    @PostMapping("")
    @ResponseBody
    public Map<String, Boolean> insertBoard (
            @RequestBody BoardCreateDTO board
            ) {
        Map<String,Boolean> result = new HashMap<>();
        try{
            // insert service method
            boardService.insertBoard(board);
            result.put("result", true);
        }
        catch (Exception e) {
            log.error("insert board err {}", e.getMessage());
            result.put("result", false);
        }

        return result;
    }
}
