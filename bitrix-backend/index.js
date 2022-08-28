const express = require("express");
const app = express();

require('dotenv').config();
const cors = require("cors")
const jwt = require("jsonwebtoken")

require("dotenv").config();
const cors = require("cors");


const { connection } = require("./config/config");
const TasksModel = require("./models/Tasks.model");
const userRouter = require("./controller/user");
const passport = require("./config/googleOauth");
const authentication = require("./middleware/authentication");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/", userRouter);

app.get("/tasks", authentication, async (req, res) => {
  const { userID } = req.body;

  const tasks = await TasksModel.find({ userID });

  res.send(tasks);
});

app.post("/tasks", authentication, async (req, res) => {
  let {
    title,
    description,
    time,
    creator,
    assigned,
    tag,
    highPriority,
    project,
    deadline,
    userID,
  } = req.body;

  const task = new TasksModel({
    title,
    description,
    time,
    creator,
    assigned,
    tag,
    highPriority,
    project,
    deadline,
    userID,
  });

  await task.save();
  return res.send({ message: "task created", task });
});

app.patch("/:taskId/edit", authentication, async (req, res) => {
  const { taskId } = req.params;
  const { userID } = req.body;

  const task = await TasksModel.findOne({ _id: taskId });
  // console.log(task);

  if (task.userID == userID) {
    const updated_Note = await TasksModel.findOneAndUpdate(
      { _id: taskId },
      req.body,
      { new: true },
    );

    return res.send({ message: "Successfully updated", updated_Note });
  } else {
    return res.send("You are not authorized to do this task");
  }
});

app.delete("/:taskId/delete", authentication, async (req, res) => {
  const { taskId } = req.params;
  const { userID } = req.body;

  const task = await TasksModel.findOne({ _id: taskId });

  if (task.userID == userID) {
    await TasksModel.findOneAndDelete({ _id: taskId });

    return res.send({ message: "Successfully Deleted" });
  } else {
    return res.send("You are not authorized to do this task");
  }
});


let userGoogleData ;

app.get('/auth/google',
  passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }));

  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false}),
  function(req, res) {

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["openid", "profile", "email"] }),
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {

    // Successful authentication, redirect home.
    userGoogleData = req.user
    // console.log(req.user)

    // res.send({"message": "Login Successful", "user":req.user})
    res.redirect('http://localhost:3000');
  });

app.get("/googlelogin", (req, res) => {
    const { emails, name } = userGoogleData;
  const token = jwt.sign({ email: emails[0].value }, process.env.SECRET_KEY);
  res.send({
    email: emails[0].value,
    username: name.givenName,
    message: "Login Successfull",
    token
  });
});


    // res.redirect('/');
    res.send({ message: "Login Successful", user: req.user });
  },
);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
  console.log("Listening to port 8000");
});
