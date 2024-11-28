// /account/account.js

// 라우터 만들기 account.js를 만들기
// /api/signup api만들기 post로 만들기
// id password로 전달 -> consol.log로 만들어서
// signup에서 유저정보 생성하여 users 배열에 저장.
// 로그인 만들기 (signin) => post
// 회원조회 만들기 (account) => get
//test중입니다.
import express from 'express';

const router = express.Router();

const users = [];
// '/' => http://localhost:3000/api/signup 으로 요청이 들어오면 함수 실행.
// request : 내가 받은 정보
// response : 내가 보낼 정보
router.post('/signup', (request, response) => {
  const { id, password } = request.body; // { id: 'test', password: 'test' }
  users.push({ id, password });
  console.log(id, password);
  return response.json({ users });
});
router.post('/signin', (request, response) => {
  const { login } = request.body; // { id: 'test', password: 'test' }
  users.push(login, ': 님이 로그인되었습니다.');
  console.log(login);
  return response.json({ users });
});
router.get('/account', (request, response) => {
  const { account } = request.body; // { id: 'test', password: 'test' }
  users.push(account);
  console.log(account);
  return response.json({ users });
});

export default router;
