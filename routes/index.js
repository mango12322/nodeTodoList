const express = require("express");
const router = express.Router();

const tasksApi = require("./tasksApi");

router.use("/tasks", tasksApi);

module.exports = router;
