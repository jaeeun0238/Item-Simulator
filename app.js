// app.js
//express 서버 3000포트 띄우기
import routesAccount from './routes/account.js';
import routesCharacter from './routes/character.js';
import express from 'express'; // 모듈 불러오기

const app = express(); // exoress()함수를 호출해서 app라는 객체생성
const PORT = 3000; // 서버기 실행될 포트, 3000번 사용

//app.get() 메서드를 사용해서 http get 요청 루트 ("/")에 대한 요청이 들어오면 "Hello World" 출력
// req = 요청 객체 res = 응답 객체
// localhost:3000/ 으로 get 요청이 들어오면 함수 실행 (req, res) => { }
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(express.json());

// /api 주소로 접근하였을 때, router와 TodosRouter로 클라이언트의 요청이 전달됩니다.
// app.use("/", router);
// app.use("/api", TodosRouter); // http://localhost:3000/

// localhost:3000/api
app.use('/api', [routesAccount, routesCharacter]); // http://localhost:3000/api

// app.listen()메서드를 호출하여 서버를 시작 , 포트를 불러오고 클라이언트요청을 대기
// 서버가 성공적으로 시작되면 메세지 출력
// localhost:3000/
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});

// / : root -> 최상위 경로
// /test1.txt -> /text/test1.txt
// /test2.txt -> /text/test2.txt
// /test3.txt -> /text/test3.txt
