import express from 'express';
import charactersInfo from './character.js';
// import { users } from './account.js';

const router = express.Router();

export default router;
// 1. item 생성 ,
// 2. 수정(가격은 수정x), updateItem
// 3. (아이템 코드, 아이템 명, 아이템 가격) 내용만 조회
const items = [];
router.post('/makeItem', (request, response) => {
  const { item_code, item_name, item_stat, item_price } = request.body;
  items.push({ item_code, item_name, item_stat, item_price });
  return response.json({ items });
});
