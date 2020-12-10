import produce from "immer";
import { GET_PROJECT_TYPE_ERROR, GET_PROJECT_TYPE_PENDING, GET_PROJECT_TYPE_SUCCESS } from "./project-type.constants";

const initialState = {
  data: [],
  loading: false,
  error: false,
};
export const projectTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_TYPE_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case GET_PROJECT_TYPE_SUCCESS:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.data = action.payload;
      });
    case GET_PROJECT_TYPE_ERROR:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = true;
        window.location.href = "/login";
      });
    default:
      return state;
  }
};

export const getProjectTypePending = () => {
  return {
    type: GET_PROJECT_TYPE_PENDING,
  };
};
export const getProjectTypeSucess = data => {
  return {
    type: GET_PROJECT_TYPE_SUCCESS,
    payload: data,
  };
};
export const getProjectTypeError = error => {
  return {
    type: GET_PROJECT_TYPE_PENDING,
    error,
  };
};

