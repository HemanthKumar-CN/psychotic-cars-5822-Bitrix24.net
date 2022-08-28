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
        tasks: [...state.tasks, payload],
        isLoading: false,
        isError: false,
      };
    case types.ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TASK_SUCCESS:
      return {
        ...state,
        tasks: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.Delete_TASK:
      const afterDelete = state.tasks.filter((el) => {
        return el._id != payload;
      });
      return {
        ...state,
        tasks: afterDelete,
      };

    default:
      return state;
  }
};

export { reducer };
