import produce from "immer";
import {
  GET_CUSTOMERS_ERROR,
  GET_CUSTOMERS_PENDING,
  GET_CUSTOMERS_SUCCESS,
  GET_DETAILS_CUSTOMERS,
  SENDING_REQUEST_CUSTOMERS_ERROR,
  SENDING_REQUEST_CUSTOMERS_PENDING,
  SENDING_REQUEST_CUSTOMERS_SUCCESS,
} from "./customers.constans";

const initialState = {
  data: [],
  dataDetails: [],
  loading: false,
  error: "",
};


export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case GET_CUSTOMERS_SUCCESS:
      return produce(state, draftState => {
        draftState.data = action.payload;
        draftState.loading = false;
      });
    case GET_CUSTOMERS_ERROR:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.error;
      });
    case GET_DETAILS_CUSTOMERS:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.dataDetails = action.payload;
      });
    case SENDING_REQUEST_CUSTOMERS_PENDING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case SENDING_REQUEST_CUSTOMERS_SUCCESS:
      return produce(state, draftState => {
        draftState.loading = false;
      });
    case SENDING_REQUEST_CUSTOMERS_ERROR:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = action.error;
      });
    default:
      return state;
  }
};

export const getCustomersPending = () => {
  return {
    type: GET_CUSTOMERS_PENDING,
  };
};
export const getCustomersSuccess = data => {
  return {
    type: GET_CUSTOMERS_SUCCESS,
    payload: data,
  };
};
export const getCustomersError = error => {
  return {
    type: GET_CUSTOMERS_ERROR,
    error,
  };
};
export const getCustomersDetails = data => {
  return {
    type: GET_DETAILS_CUSTOMERS,
    payload: data,
  };
};
export const sendRequestCustomersPending = () => {
  return {
    type: SENDING_REQUEST_CUSTOMERS_PENDING,
  };
};
export const sendRequestCustomersSuccess = () => {
  return {
    type: SENDING_REQUEST_CUSTOMERS_SUCCESS,
  };
};
export const sendRequestCustomersError = error => {
  return {
    type: SENDING_REQUEST_CUSTOMERS_ERROR,
    error,
  };
};
