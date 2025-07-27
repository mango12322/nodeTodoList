const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// 1. 스키마 만들기
const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// * token *
userSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

// * methods가 json으로 바뀔 때 호출하는 함수 *
userSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.password; // 패스워드 빼고 보내기

  return obj;
};

// 2. 모델 만들기
const User = mongoose.model("User", userSchema);

module.exports = User;
