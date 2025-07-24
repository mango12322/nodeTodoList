const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

const port = 5000;

const app = express();
app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = `mongodb://localhost:27017/TodoList`;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("DB 연결 성공!");

    app.listen(port, () => {
      console.log(`${port} 번호에 연결되었습니다.`);
    });
  })
  .catch((err) => {
    console.log("DB 연결 실패", err);
  });
