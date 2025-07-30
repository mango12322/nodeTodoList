const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");
const authController = require("../controller/authController");

// 추가
router.post("/", authController.authenticate, taskController.createTask);

// 가져오기
router.get("/", authController.authenticate, taskController.getTask);

// 수정
router.put("/:id", taskController.putTask);

// 삭제
router.delete("/:id", taskController.deleteTask);

module.exports = router;
