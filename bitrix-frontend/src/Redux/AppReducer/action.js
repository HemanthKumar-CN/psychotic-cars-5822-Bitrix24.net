import * as types from "./actionTypes";
import axios from "axios";

const addTask = (new_task, token) => async (dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });
  return await fetch("https://stormy-caverns-19491.herokuapp.com/tasks", {
    method: "POST",
    body: JSON.stringify(new_task),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json())
    .then((r) => {
      // console.log("r", r);
      dispatch({ type: types.ADD_TASK_SUCCESS, payload: r.data });
      return types.ADD_TASK_SUCCESS;
    })
    .catch((e) => {
      console.log("error", e);
      dispatch({ type: types.ADD_TASK_FAILURE });
    });
};

const getTask = (token) => async (dispatch) => {
  dispatch({ type: types.GET_TASK_REQUEST });
  await fetch("https://stormy-caverns-19491.herokuapp.com/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json())
    .then((r) => {
      // console.log(r.data);
      dispatch({ type: types.GET_TASK_SUCCESS, payload: r.data });
      return types.GET_TASK_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.GET_TASK_FAILURE, payload: e });
    });
};

const deleteTask = (id, token) => async (dispatch) => {
  return await fetch(
    `https://stormy-caverns-19491.herokuapp.com/${id}/delete`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: types.Delete_TASK, payload: id });
      return types.Delete_TASK;
    });
};

const updateTask = (id, token, payload) => async (dispatch) => {
  return await fetch(`https://stormy-caverns-19491.herokuapp.com/${id}/edit`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({ type: types.Edit_Task, payload: res.data });
      return types.Edit_Task;
    });
};

export { addTask, getTask, deleteTask, updateTask };
