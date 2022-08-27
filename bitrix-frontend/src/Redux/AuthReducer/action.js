//Create ActionCreator functions here

import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "https://stormy-caverns-19491.herokuapp.com/login",   
    data: payload,
  })
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};

// const login = (payload) => async (dispatch) => {
//   dispatch({ type: types.LOGIN_REQUEST });
//   return await fetch("https://reqres.in/api/login", {
//     method: "POST",
//     body: JSON.stringify(payload),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((r) => r.json())
//     .then((r) => {
//       // console.log(r)
//       dispatch({ type: types.LOGIN_SUCCESS, payload: r.data })      
//     })
//     .catch((e) => {
//       // console.log(e);
//       dispatch({ type: types.FAILURE });
//     });
// };




export {
  login
};