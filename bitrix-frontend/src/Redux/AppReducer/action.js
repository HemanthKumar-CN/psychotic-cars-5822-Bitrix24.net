import * as types from "./actionTypes";
import axios from "axios";


const addTask = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });
  return axios
    .post(" http://localhost:8080/tasks", payload)
    .then((r) => {
      console.log(r.data)
      dispatch({ type: types.ADD_TASK_SUCCESS, payload: r.data });
      return types.ADD_TASK_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.ADD_TASK_FAILURE, payload: e });
      return types.ADD_TASK_FAILURE;
    });
};

const getTask = () => (dispatch) => {
  dispatch({ type: types.GET_TASK_REQUEST });
  return axios
    .get("http://localhost:8000/tasks")
    .then((r) => {
      console.log(r.data);
      dispatch({ type: types.GET_TASK_SUCCESS, payload: r.data });
      return types.GET_TASK_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.GET_TASK_FAILURE, payload: e });
      return types.GET_TASK_FAILURE;
    });
};

export { addTask,getTask };