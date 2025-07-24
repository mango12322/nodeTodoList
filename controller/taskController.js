const Task = require("../model/Task");

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const newTask = new Task({ task, isComplete });
    await newTask.save();
    res.status(200).json({ status: "Success", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "creteFail", error: err });
  }
};

taskController.getTask = async (req, res) => {
  try {
    // 1. DB 안에서 가져오기
    const taskList = await Task.find({});
    res.status(200).json({ status: "success", data: taskList });
  } catch (err) {
    res.status(400).json({ status: "getFail", error: err });
  }
};

taskController.putTask = async (req, res) => {
  try {
    // 1. 수정할 아이디 찾기
    const taskId = await Task.findById(req.params.id);
    if (!taskId) {
      return res.status(400).json({ message: "Not found" });
    }

    // 2. 있을 시 수정하기
    const putTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // 3. 유저한테 메세지 보내기
    res.status(200).json({ status: "success", data: putTask });
  } catch (err) {
    res.status(400).json({ status: "putFail", error: err });
  }
};

taskController.deleteTask = async (req, res) => {
  try {
    // 1. DB에서 id 찾고 비교하기
    const taskId = await Task.findById(req.params.id);
    if (!taskId) {
      return res.status(400).json({ message: "Not found" });
    }

    // 2. 1번 성공 시 삭제
    const deleteTask = await Task.findByIdAndDelete(taskId);

    // 3. 유저한테 메세지 보내기
    res.status(200).json({ status: "success", data: deleteTask });
  } catch (err) {
    res.status(400).json({ status: "deleteFail", error: err });
  }
};

module.exports = taskController;
