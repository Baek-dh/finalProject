package edu.kh.bangbanggokgok.controller.reply;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import edu.kh.bangbanggokgok.service.reply.ReplyService;
import edu.kh.bangbanggokgok.vo.reply.Reply;


/*
	Rest(Representaional State Transfer)
	- 자원을 이름으로 구분(Representational, 자원의 표현)하여
	- 자원의 상태(State)를 주고 받는 것(Transfer)
	-> 특정한 이름(주소)로 요청이 오면 값으로 응답
 
 	RestController : 요청에 따른 응답이 모두 데이터(값) 자체인 컨트롤러 
	- 이 컨트롤러에서 반환되는 것은 모두 값이다
 	-> @Controller + @ResponseBody
*/

@RestController
@RequestMapping("/reply")
public class ReplyController {

	@Autowired
	private ReplyService service;
	
	// 댓글 목록 조회
	@GetMapping("/selectReplyList")
	public String selectReplyList(int movelineNo) {
		
		List<Reply> rList = service.selectReplyList(movelineNo);
		return new Gson().toJson(rList);
	}
	
	
	// 댓글 등록
	@PostMapping("/insert")
	public int insertReply(Reply reply) {
		return service.insertReply(reply);
	}
	
	
	// 댓글 삭제
	@GetMapping("/delete")
	public int deleteReply(int replyNo) {
		return service.deleteReply(replyNo);
	}
	
	
	// 댓글 수정
	@PostMapping("/update")
	public int updateReply(Reply reply) {
		return service.updateReply(reply);
	}
	
	
	
	
}
