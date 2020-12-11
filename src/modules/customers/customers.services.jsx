import { deleteApiAxios } from "../../services/axios-delete-api.services";
import { getApiAxios } from "../../services/axios-get-api.services";
import { putApiAxios } from "../../services/axios-put-api.services";
import {
  getCustomersDetails, getCustomersError,
  getCustomersPending, getCustomersSuccess,
  sendRequestCustomersError,
  sendRequestCustomersPending,
  sendRequestCustomersSuccess,
} from "./customers.reducers";

export const getCustomers = () => dispatch => {
  const apiCustomers = process.env.REACT_APP_API_SERVER_CUSTOMERS;
  getApiAxios(apiCustomers, dispatch, getCustomersPending, getCustomersSuccess, getCustomersError);
};

export const getDetailsCustomers = id => dispatch => {
  const apiCustomers = process.env.REACT_APP_API_SERVER_CUSTOMERS + "/" + id;
  getApiAxios(apiCustomers, dispatch, getCustomersPending, getCustomersDetails, getCustomersError);
};

export const updateCustomer = (id, dataCustomer) => dispatch => {
  const apiCustomer = process.env.REACT_APP_API_SERVER_CUSTOMERS + "/" + id;
  putApiAxios(
    apiCustomer,
    dispatch,
    dataCustomer,
    sendRequestCustomersPending,
    sendRequestCustomersSuccess,
    sendRequestCustomersError,
  );
};
export const deleteCustomer = id => dispatch => {
  const apiCustomer = process.env.REACT_APP_API_SERVER_CUSTOMERS + "/" + id;
  deleteApiAxios(
    apiCustomer,
    dispatch,
    sendRequestCustomersPending,
    sendRequestCustomersSuccess,
    sendRequestCustomersError,
  );
};
