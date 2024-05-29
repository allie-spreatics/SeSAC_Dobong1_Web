package lecture.spring_boot_jpa.controller;

import lecture.spring_boot_jpa.dto.BoardCreateDTO;
import lecture.spring_boot_jpa.dto.ResErrorDTO;
import lecture.spring_boot_jpa.entity.BoardEntity;
import lecture.spring_boot_jpa.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {
    @Autowired
    private BoardService boardService;

    @GetMapping
    public ResponseEntity<?> getBoards() {
        List<BoardEntity> boards = boardService.getBoards();
        return ResponseEntity.ok(boards);
    }

    @PostMapping
    public ResponseEntity<?> insertBoard(@RequestBody BoardCreateDTO board) {
        try {
            return ResponseEntity.ok(boardService.insertBoard(board));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateBoard(
        @PathVariable int id,
        @RequestBody BoardCreateDTO board
    ) {
        try {
            return ResponseEntity.ok(boardService.updateBoard(id, board));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> updateBoard(
        @PathVariable int id
    ) {
        try {
            return ResponseEntity.ok(boardService.deleteBoard(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ResErrorDTO.builder().error(e.getMessage()).build()
            );
        }
    }
}
