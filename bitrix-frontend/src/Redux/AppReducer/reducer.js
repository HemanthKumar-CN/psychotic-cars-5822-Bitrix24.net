import * as types from "./actionTypes";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
      case types.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: payload,
        isLoading: false,
        isError: false,
      };
      case types.ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };     

    default:
      return state;
  }
};

export { reducer };
