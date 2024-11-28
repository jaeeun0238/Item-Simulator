//routes/character.js

//id 패스워드 말고 캐릭터로
// create , status , item

import { users } from '../routes/account.js';
import express, { response } from 'express';

const router = express.Router();

router.post('/create', (request, response) => {
  // id, password가 아닌 userUid 를 받아서 캐릭터 생성
  // 캐릭터 정보가 바로 나오도록
  const { nickname, userUid } = request.body;
  // users 에서 id와 password가 일치하는 유저 찾기 ㅜㅜ
  // 찾은 유저 정보안에 charater에 nickname 과 level 1을 넣어 주기
  // 그리고 다른 api 에서 users 로그찍어서 확인해보기
  // 캐릭터 삭제, 조회
  // console.log(users);

  const user = users.find((user) => {
    return user.userUid === Number(userUid);
  });
  if (!user) {
    return response.json('id 또는 password가 잘못입력되었습니다.');
  }

  let character = { nickname: nickname, level: 1 };
  user.character = character;
  //else안쓰는 이유 이미 다 걸러져서
  return response.json(character);
});

// 캐릭터 삭제 delete
// path : '/delete'
// userUid를 받아서 해당 userUid를 가진 유저의 캐릭터를 삭제

router.delete('/delete', (request, response) => {
  const { nickname, userUid } = request.body;

  const user = users.find((user) => {
    // console.log(user);
    return user.userUid === Number(userUid);
  });
  // console.log(user);
  if (user.userUid === +userUid) {
    // console.log(user);
    return response.json({
      message: `${nickname}이 삭제되었습니다.`,
    });
  }
  return response.json({
    message: ' 불러오기 실패! ',
  });

  // return response(user, `${nickname}이 삭제가 실패 되었습니다.`);
});

// 캐릭터 조회 get
// path : '/status'
// userUid를 받아서 해당 userUid를 가진 유저의 캐릭터 정보를 조회

router.get('/status', (request, response) => {
  const { userUid } = request.body;
  const userAccount = function (user) {
    return user.userUid === userUid;
  };
  const userUidAccount = users.find(userAccount);
  // console.log(user);
  if (!userUidAccount) {
    return response.json('유저를 찾지 못했습니다.');
  }
  //
  else {
    return response.json(users);
  }
});
//users 내보내기
export default router;
//
//[
//   {
//     id: 'abc',
//     password: '1234',
//     character: { nickname: '마법사', level: 1 }
//   }
//]

// const obj = {};

// console.log(obj.character); // undefined

// obj.character = { nickname: '마법사', level: 1 };

// console.log(obj.character); // { nickname: '마법사', level: 1 }