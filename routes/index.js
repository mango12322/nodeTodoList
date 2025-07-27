const express = require("express");
const router = express.Router();

const tasksApi = require("./tasksApi");
const userApi = require("./userApi");

router.use("/tasks", tasksApi);
router.use("/user", userApi);

module.exports = router;
