import produce from "immer";
import {
  GET_DETAILS_TECH_STACK,
  GET_TECH_STACK_ERROR,
  GET_TECH_STACK_PENDING,
  GET_TECH_STACK_SUCCESS,
  SENDING_REQUEST_TECH_STACK_SUCESS,
} from "./tech-stack.constans";

const initialState = {
  data: [],
  detailsTeckStack: { record: { name: "" }},
  loading: false,
  error: "",
  sucess: false,
};
export const techStackReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECH_STACK_PENDING:
      return produce(state, draftState => {
        draftState.sucess = false;
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
    case GET_DETAILS_TECH_STACK:
      return produce(state, draftState => {
        draftState.sucess = false;
        draftState.loading = false;
        draftState.detailsTeckStack = action.payload;
      });
    case SENDING_REQUEST_TECH_STACK_SUCESS:
      return produce(state, draftState => {
        draftState.sucess = true;
        draftState.loading = false;
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
export const getDetailsTechStackSucess = data => {
  return {
    type: GET_DETAILS_TECH_STACK,
    payload: data,
  };
};

export const sendingRequestTechStackSucess = () => {
  return {
    type: SENDING_REQUEST_TECH_STACK_SUCESS,
  };
};
