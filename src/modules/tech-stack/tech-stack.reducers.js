import produce from "immer";
import {
  GET_TECH_STACK_ERROR,
  GET_TECH_STACK_PENDING,
  GET_TECH_STACK_SUCCESS,
} from "./tech-stack.constans";

const initialState = {
  data: [],
  loading: false,
  error: "",
};
export const techStackReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECH_STACK_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case GET_TECH_STACK_SUCCESS:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.data = action.payload;
      });
    case GET_TECH_STACK_ERROR:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.error;
      });
    default:
      return state;
  }
};
export const getTechStackSuccess = data => {
  return {
    type: GET_TECH_STACK_SUCCESS,
    payload: data,
  };
};
export const getTechStackError = error => {
  return {
    type: GET_TECH_STACK_ERROR,
    error,
  };
};

export const getTechStackPending = () => {
  return {
    type: GET_TECH_STACK_PENDING,
  };
};
