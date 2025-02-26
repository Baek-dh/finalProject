package edu.kh.bangbanggokgok.service.question;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.bangbanggokgok.common.Util;
import edu.kh.bangbanggokgok.dao.question.QuestionDAO;
import edu.kh.bangbanggokgok.vo.board.Pagination;
import edu.kh.bangbanggokgok.vo.question.Question;
import edu.kh.bangbanggokgok.vo.question.QuestionDetail;
import edu.kh.bangbanggokgok.vo.user.User;

@Service
public class QuestionServiceImpl implements QuestionService{
	
	@Autowired
	private QuestionDAO dao;

	// 문의 게시판 목록 조회
	@Override
	public Map<String, Object> selectQuestionList(int cp, User loginUser) {
		
		int listCount = dao.getListCount(loginUser);
		Pagination pagination = new Pagination(cp, listCount);
		
		List<Question> qList = dao.selectQuestionList(pagination, loginUser); 
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("pagination", pagination);
		map.put("qList", qList);
		
		return map;
	}

	// 문의 게시글 상세 조회
	@Override
	public QuestionDetail selectQuestionDetail(int questionNo) {
		return dao.selectQuestionDetail(questionNo);
	}

	// 문의 게시글 작성
	@Override
	public int insertQuestion(QuestionDetail detail) throws IOException {
		
		detail.setQuestionTitle(Util.XSSHandling(detail.getQuestionTitle()));
		detail.setQuestionContent(Util.XSSHandling(detail.getQuestionContent()));
		detail.setQuestionContent(Util.newLineHandling(detail.getQuestionContent()));
		
		return dao.insertQuestion(detail);
	}
	
	
	
	
	

}
