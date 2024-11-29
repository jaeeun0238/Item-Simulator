import express from 'express';
import charactersInfo from './character.js';
// import { users } from './account.js';

const router = express.Router();

// 1. item 생성 , post
// 2. 수정(가격은 수정x), updateItem put
// 3. (아이템 코드, 아이템 명, 아이템 가격) 내용만 조회
const items = [];
// const item = {item_code, item_name, item_stat, item_price};
router.post('/makeItem', (request, response) => {
  const { itemInfo } = request.body;
  items.push({ itemInfo });
  return response.json({ items });
});

// 수정 완료
router.put('/editItem', (request, response) => {
  const { item_code, item_name, item_stat } = request.body;
  const item = items.find((item) => item.item_code === item_code);

  if (item) {
    item.item_name = item_name; // 이름 업데이트
    item.item_stat = item_stat; // 상태 업데이트
  }
  return response.json({ items });
});

router.get('/itemCheck', (request, response) => {
  const { item_code } = request.body;
  const item = items.find((item) => item.item_code === item_code);

  if (!+item) {
    return response.json('정보가 잘못 입력되었습니다.');
  }
  return response.json({ item });
});
export default router;
