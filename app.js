const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// 서버에서 클라이언트로부터 전송된 JSON 형식의 데이터를
// 파싱(해석) 하기 위해 사용하는 미들웨어
const index = require("./routes/index");

const port = 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", index);

// 이렇게 작성시 데이터가 들어오면 자동으로 tode-list가 만들어진다.
const mongoURI = `mongodb://localhost:27017/todo-list`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("DB 연결 성공");
    app.listen(port, () => {
      console.log(`${port} 번호에 연결되었습니다.`);
    });
  })
  .catch((err) => {
    console.error("DB 연결 실패");
  });
