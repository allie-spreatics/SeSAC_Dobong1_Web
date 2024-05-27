package lecture.spring_boot_mybatis.controller;

import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.dto.DefaultResDTO;
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
    public DefaultResDTO insertBoard (
            @RequestBody BoardCreateDTO board
            ) {
        boolean result  = false;
        String errMsg = null;
        try{
            // insert service method
            boardService.insertBoard(board);
            result = true;
        }
        catch (Exception e) {
            errMsg = e.getMessage();
            log.error("insert board err {}", e.getMessage());
        }

        return  DefaultResDTO.builder()
                .result(result)
                .errMsg(errMsg)
                .build();
    }

    @PatchMapping("/{id}")
    @ResponseBody
    public DefaultResDTO updateBoard(
            @PathVariable int id,
            @RequestBody BoardCreateDTO board
    ) {
        DefaultResDTO res = new DefaultResDTO();
        try{
            // patch service method
            boardService.updateBoard(id, board);
            res.setResult(true);
        }
        catch (Exception e) {
            res.setResult(false);
            res.setErrMsg(e.getMessage());
            log.error("patch board err {}", e.getMessage());
        }

        return res;
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public DefaultResDTO deleteBoard(
            @PathVariable int id
    ) {
        DefaultResDTO res = new DefaultResDTO();
        try{
            // delete service method
            boardService.deleteBoard(id);
            res.setResult(true);
        }
        catch (Exception e) {
            res.setResult(false);
            res.setErrMsg(e.getMessage());
            log.error("delete board err {}", e.getMessage());
        }

        return res;
    }
}
