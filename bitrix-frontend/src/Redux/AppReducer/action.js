import * as types from "./actionTypes";
import axios from "axios";


const addTask = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_REQUEST });
  return axios
    .post("url", payload)
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

export { addTask };