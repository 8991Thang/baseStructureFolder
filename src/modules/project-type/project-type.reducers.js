import produce from "immer";
import {
  DELETE_PROJECT_TYPE,
  GET_DETAILS_PROJECT_TYPE_ERROR,
  GET_DETAILS_PROJECT_TYPE_PENDING,
  GET_DETAILS_PROJECT_TYPE_SUCCESS,
  GET_PROJECT_TYPE_ERROR,
  GET_PROJECT_TYPE_PENDING,
  GET_PROJECT_TYPE_SUCCESS,
  SENDING_REQUEST_PROJECT_TYPE_ERROR,
  SENDING_REQUEST_PROJECT_TYPE_PENDING,
  SENDING_REQUEST_PROJECT_TYPE_SUCCESS,
  UPDATE_PROJECT_TYPE,

} from "./project-type.constants";

const initialState = {
  data: [],
  dataDetails: { record: { name: "" }},
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
      });
    case GET_DETAILS_PROJECT_TYPE_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case GET_DETAILS_PROJECT_TYPE_SUCCESS:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.dataDetails = action.payload;
      });
    case GET_DETAILS_PROJECT_TYPE_ERROR:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.error;
      });
    case SENDING_REQUEST_PROJECT_TYPE_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case SENDING_REQUEST_PROJECT_TYPE_SUCCESS:
      return produce(state, draftState => {
        draftState.data.push(action.payload);
        draftState.loading = false;
      });
    case SENDING_REQUEST_PROJECT_TYPE_ERROR:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.error;
      });
    case DELETE_PROJECT_TYPE:
      return produce(state, draftState => {
        draftState.loading = false;
        return draftState.data.filter(projectType => projectType._id !== action.payload);
      });
    case UPDATE_PROJECT_TYPE:
      return produce(state, draftState => {
        draftState.loading = false;
        let findProjectType = draftState.data.find(projectType =>
          projectType._id === action.payload.id);
        findProjectType = action.payload.dataInput;
        console.log(findProjectType);
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
export const getDetailsProjectTypePending = () => {
  return {
    type: GET_DETAILS_PROJECT_TYPE_PENDING,
  };
};
export const getDetailsProjectTypeSucess = data => {
  return {
    type: GET_DETAILS_PROJECT_TYPE_SUCCESS,
    payload: data,
  };
};
export const getDetailsProjectTypeError = error => {
  return {
    type: GET_DETAILS_PROJECT_TYPE_ERROR,
    error,
  };
};

export const sendingRequestProjectTypePending = () => {
  return {
    type: SENDING_REQUEST_PROJECT_TYPE_PENDING,
  };
};
export const sendingRequestProjectTypeSucess = (dataProjectType = null) => {
  return {
    type: SENDING_REQUEST_PROJECT_TYPE_SUCCESS,
    payload: dataProjectType,
  };
};

export const sendingRequestProjectTypeError = error => {
  return {
    type: SENDING_REQUEST_PROJECT_TYPE_ERROR,
    error,
  };
};

export const projectTypeUpdate = data => {
  return {
    type: UPDATE_PROJECT_TYPE,
    payload: data,
  };
};
