const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  title: String,
  description: String,
  time: String,
  creator: String,
  assigned: Array,
  tag: String,
  employees: Array,
  highPriority: Boolean,
  project: String,
  deadline: String,
  userID: String,
});

const TasksModel = mongoose.model("tasks", TasksSchema);

module.exports = TasksModel;
