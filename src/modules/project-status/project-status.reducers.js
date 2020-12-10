import produce from "immer";
import { GET_PROJECT_STATUS_ERROR, GET_PROJECT_STATUS_PENDING, GET_PROJECT_STATUS_SUCCESS } from "./project-status.constans";

const initialState = {
  data: [],
  loading: false,
  error: "",
};
export const projectStatusReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_STATUS_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case GET_PROJECT_STATUS_SUCCESS:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.data = action.payload;
      });
    case GET_PROJECT_STATUS_ERROR:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.error;
      });
    default:
      return state;
  }
};


export const getProjectStatusSuccess = data => {
  return {
    type: GET_PROJECT_STATUS_SUCCESS,
    payload: data,
  };
};
export const getProjectStatusError = error => {
  return {
    type: GET_PROJECT_STATUS_ERROR,
    error,
  };
};

export const getProjectStatusPending = () => {
  return {
    type: GET_PROJECT_STATUS_PENDING,
  };
};

