import * as types from "./actionTypes";
import axios from "axios";

const addTask = (payload,token) => async(dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });
  await fetch("https://stormy-caverns-19491.herokuapp.com/tasks", {
    method: "POST",
    mode:"no-cors",
    body:payload,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => {
      console.log(r);
      dispatch({ type: types.ADD_TASK_SUCCESS, payload: r.data });
      return types.ADD_TASK_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.ADD_TASK_FAILURE, payload: e });
      return types.ADD_TASK_FAILURE;
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
      console.log(r);
      // dispatch({ type: types.GET_TASK_SUCCESS, payload: r.data });
      // return types.GET_TASK_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.GET_TASK_FAILURE, payload: e });
      return types.GET_TASK_FAILURE;
    });
};

export { addTask, getTask };
