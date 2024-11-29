// /routes/account.js

// 라우터 만들기 account.js를 만들기
// /api/signup api만들기 post로 만들기
// id password로 전달 -> consol.log로 만들어서
// signup에서 유저정보 생성하여 users 배열에 저장.
// 로그인 만들기 (signin) => post
// 회원조회 만들기 (account) => get

import express from 'express';

const router = express.Router();

// '/' => http://localhost:3000/api/signup 으로 요청이 들어오면 함수 실행.
// request : 내가 받은 정보
// response : 내가 보낼 정보
router.post('/signup', (request, response) => {
  const { id, password } = request.body; // { id: 'test', password: 'test' }
  const userUid = users.length + 1;
  const character = '';
  const createdUser = { id, password, userUid, character };
  users.push(createdUser);
  return response.json(createdUser);
});

// id, pw 받아서
// users 배열에서 id, pw가 일치하는지 확인
// 일치하면 로그인되었습니다. 출력
router.post('/signin', function (request, response) {
  const { id, password } = request.body;

  // 일반 함수를 사용하여 사용자 찾기
  // const login = function (user) {
  //   return user.id == id && user.password === password;
  // };
  const userLogin = users.find(
    (user) => user.id === id && user.password === password,
  );
  // console.log(user);
  if (!userLogin) {
    return response.json('로그인실패');
  }
  return response.json(userLogin);
});

// id를 받아서
// users 배열에서 id가 일치하는지 확인
// 일치하면 해당 id의 정보를 출력
router.get('/account', (request, response) => {
  const { id } = request.body; // { id: 'test', password: 'test' }
  const account = function (user) {
    return user.id === id;
  };
  const userAccount = users.find(account);
  // console.log(user);
  if (!userAccount) {
    return response.json('유저를 찾지 못했습니다.');
  }
  return response.json(userAccount);
});

//   const { id } = request.body; // { id: 'test', password: 'test' }
//   const account = function (user) {
//     return user.id === id;
//   };
//   const userAccount = users.find(account);
//   // console.log(user);
//   if (userAccount) {
//     return response.json(`유저 ${id} 입니다`);
//   }
//   //
//   else {
//     return response.json('유저를 찾지 못했습니다.');
//   }
// });

export const users = []; //users 내보내기
export default router;
