import { getDetailsApiAxios } from "../../services/axios-get-details.services";
import { getApiAxios } from "../../services/axios-get-list-api.services";
import {
  getCustomersDetails,
  getCustomersError,
  getCustomersPending,
  getCustomersSuccess,
} from "./customers.reducers";

export const getCustomers = () => dispatch => {
  const apiCustomers = process.env.REACT_APP_API_SERVER_CUSTOMERS;
  getApiAxios(apiCustomers, dispatch, getCustomersPending, getCustomersSuccess, getCustomersError);
};

export const getDetailsCustomers = id => dispatch => {
  const apiCustomers = process.env.REACT_APP_API_SERVER_CUSTOMERS + "/" + id;
  getDetailsApiAxios(
    apiCustomers,
    dispatch,
    getCustomersPending,
    getCustomersDetails,
    getCustomersError,
  );
};
