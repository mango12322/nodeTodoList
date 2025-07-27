const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

// 1. 회원가입
router.post("/", userController.createUser);

// 2. 로그인
router.post("/login", userController.loginWithEmail);

module.exports = router;
