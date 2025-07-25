const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const index = require("./routes/index");

const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", index);

const mongoURI = MONGODB_URI_PROD;

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
