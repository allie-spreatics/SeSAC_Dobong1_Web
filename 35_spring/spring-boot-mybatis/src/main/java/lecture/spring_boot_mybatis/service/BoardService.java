package lecture.spring_boot_mybatis.service;

import lecture.spring_boot_mybatis.domain.Board;
import lecture.spring_boot_mybatis.dto.BoardCreateDTO;
import lecture.spring_boot_mybatis.dto.BoardDTO;
import lecture.spring_boot_mybatis.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    @Autowired
    private BoardMapper boardMapper;
    public List<BoardDTO> getBoards(){
        List<BoardDTO> boards = new ArrayList<>();
        List<Board> result = boardMapper.getBoardsAll();

        for (int i = 0; i< result.size(); i++) {
            // Setter 이용한 version
            // BoardDTO board = new BoardDTO();
            // board.setId(result.get(i).getId());
            // board.setTitle(result.get(i).getTitle());
            // board.setContent(result.get(i).getContent());
            // board.setWriter(result.get(i).getWriter());
            // board.setRegistered(result.get(i).getRegistered());
            // board.setNo(result.get(i).getWriter() + (i+1));

            // Builder 패턴 이용한 version
            BoardDTO board = BoardDTO.builder()
                    .id(result.get(i).getId())
                    .title(result.get(i).getTitle())
                    .content(result.get(i).getContent())
                    .writer(result.get(i).getWriter())
                    .registered(result.get(i).getRegistered())
                    .no(result.get(i).getWriter() + (i+1))
                    .build();

            boards.add(board);
        }

        return boards;
    }

    public void insertBoard(BoardCreateDTO board) {
        boardMapper.insertBoard(board);
    }
}
