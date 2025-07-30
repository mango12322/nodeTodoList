const authController = {};

const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

authController.authenticate = (req, res, next) => {
  try {
    // 1. 토큰값 읽어오기
    const tokenString = req.headers.authorization; // Bearer ....
    if (!tokenString) {
      throw new Error("토큰이 없습니다.");
    }

    // 2. 토큰값만 담기
    const token = tokenString.replace("Bearer ", "");

    // 3. 토큰값이 맞는지 체크
    jwt.verify(token, JWT_SECRET_KEY, (error, payload) => {
      if (error) {
        throw new Error("토큰이 틀립니다.");
      }
      // res.status(200).json({ status: "성공", userId: payload._id });  여기서 사용하는 건 좋지 않다.
      req.userId = payload._id;
    });
    next();
  } catch (err) {
    res.status(400).json({ status: "실패", message: err.message });
  }
};

module.exports = authController;
