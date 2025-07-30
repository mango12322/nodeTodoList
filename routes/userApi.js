const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const authController = require("../controller/authController");

// 1. 회원가입
router.post("/", userController.createUser);

// 2. 로그인
router.post("/login", userController.loginWithEmail);

// 3. 토큰을 통해 유저 id빼내고 -> 그 아이디로 유저 객체 찾아서 보내주기
router.get("/me", authController.authenticate, userController.getUser);

module.exports = router;
