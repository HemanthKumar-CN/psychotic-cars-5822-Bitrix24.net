//Create ActionCreator functions here

import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "https://reqres.in/api/login",
   
    data: payload,
  })
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};

// const handleSubmit = async () => {
//   const payload = {
//       email,
//       password
//   }
//   await fetch("https://firstback12.herokuapp.com/user/login", {
//       method : "POST",
//       body : JSON.stringify(payload),
//       headers: {
//           'Content-Type': 'application/json'
//         },
//   })
//   .then((res) => res.json())
//   .then((res) => {
//       localStorage.setItem("token", res.token)
//       navigate("/todos");
//   })
//   .catch((err) => console.log(err))
// }




export {
  login
};