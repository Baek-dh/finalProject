package edu.kh.bangbanggokgok.dao.user;

import java.util.Map;

import javax.print.DocFlavor.STRING;

import org.mybatis.spring.SqlSessionTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.bangbanggokgok.vo.user.User;

@Repository
public class UserDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
//	private Logger logger = LoggerFactory.getLogger(UserDAO.class);
	
	/** 계정 생성
	 * @param account
	 * @return int
	 */
	public int addAccount(User account) {
		return sqlSession.insert("userMapper.addAccount",account);
	}
	

	/** 로그인계정 비밀번호 조회
	 * @param email
	 * @return
	 */
	public String matchPW(String email) {
		return sqlSession.selectOne("userMapper.matchPW",email);
	}

	/** 로그인 유저 정보
	 * @param email
	 * @return
	 */
	public User login(String email) {
		return sqlSession.selectOne("userMapper.login",email);
	}

	/** 계정찾기
	 * @param findInfo
	 * @return
	 */
	public User findAccount(User findInfo) {
		return sqlSession.selectOne("userMapper.findAccount",findInfo);
	}

	/** 비밀번호 검색
	 * @param resetAccount
	 * @return
	 */
	public String selectAccount(User resetAccount) {
		return sqlSession.selectOne("userMapper.selectAccount",resetAccount);
	}

	/** 비밀번호 무작위 생성 삽입
	 * @param resetAccount
	 * @return
	 */
	public int updatePassword(User resetAccount) {
		return sqlSession.update("userMapper.updatePassword", resetAccount);
	}

	//중복 체크 메소드 집합
	/** 이메일 중복
	 * @param userEmail
	 * @return
	 */
	public int emailReduplicateCheck(String userEmail) {
		return sqlSession.selectOne("userMapper.emailReduplicateCheck",userEmail);
	}

	public int insertCertification(Map<String,String> map) {
		return sqlSession.insert("userMapper.insertCertification",map);
	}

	public int emailUserCheck(Map<String, String> map) {
		return sqlSession.selectOne("userMapper.emailUserCheck",map);
	}

	public int updateCertification(Map<String, String> map) {
		return sqlSession.update("userMapper.updateCertification",map);
	}


	public int selectCertification(String userEmail) {
		return sqlSession.selectOne("userMapper.selectCertification",userEmail);
	}

}
