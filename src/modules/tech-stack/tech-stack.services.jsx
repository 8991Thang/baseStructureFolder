import { getApiAxios } from "../../services/axios-get-list-api.services";
import {
  getTechStackError,
  getTechStackPending,
  getTechStackSuccess,
} from "./tech-stack.reducers";
export const getListTechStack = () => dispatch => {
  const apiTechStack = process.env.REACT_APP_API_SERVER_TECH_STACK;
  getApiAxios(
    apiTechStack,
    dispatch,
    getTechStackPending,
    getTechStackSuccess,
    getTechStackError,
  );
};
