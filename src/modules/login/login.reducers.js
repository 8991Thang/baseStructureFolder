import produce from "immer";
import { GET_TOKEN_ERROR, GET_TOKEN_PENDING, GET_TOKEN_SUCCESS } from "./login.constans";

const initialState = {
  loading: false,
  error: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case GET_TOKEN_SUCCESS:
      return produce(state, draftState => {
        draftState.loading = false;
        sessionStorage.setItem("token", action.payload);
      });
    case GET_TOKEN_ERROR:
      return produce(state, draftState => {
        draftState.error = true;
        draftState.loading = false;
      });
    default:
      return state;
  }
};

export const getTokenPending = () => {
  return {
    type: GET_TOKEN_PENDING,
  };
};
export const getTokenSuccess = token => {
  return {
    type: GET_TOKEN_SUCCESS,
    payload: token,
  };
};
export const getTokenError = error => {
  return {
    type: GET_TOKEN_ERROR,
    error,
  };
};

