import produce from "immer";
import { GET_DETAILS_PROJECT_STATUS, GET_PROJECT_STATUS_ERROR, GET_PROJECT_STATUS_PENDING, GET_PROJECT_STATUS_SUCCESS, SENDING_REQUEST_PROJECT_STATUS_ERROR, SENDING_REQUEST_PROJECT_STATUS_PENDING, SENDING_REQUEST_PROJECT_STATUS_SUCCESS } from "./project-status.constans";

const initialState = {
  data: [],
  projectStatusDetails: { record: { name: "" }},
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
    case SENDING_REQUEST_PROJECT_STATUS_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case SENDING_REQUEST_PROJECT_STATUS_SUCCESS:
      return produce(state, draftState => {
        draftState.loading = false;
      });
    case SENDING_REQUEST_PROJECT_STATUS_ERROR:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.error;
      });
    case GET_DETAILS_PROJECT_STATUS:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.projectStatusDetails = action.payload;
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

export const sendingRequestProjectTypePending = () => {
  return {
    type: SENDING_REQUEST_PROJECT_STATUS_PENDING,
  };
};
export const sendingRequestProjectTypeSuccess = () => {
  return {
    type: SENDING_REQUEST_PROJECT_STATUS_SUCCESS,
  };
};
export const sendingRequestProjectTypeError = error => {
  return {
    type: SENDING_REQUEST_PROJECT_STATUS_ERROR,
    error,
  };
};
export const detailsProjectStatus = data => {
  return {
    type: GET_DETAILS_PROJECT_STATUS,
    payload: data,
  };
};


