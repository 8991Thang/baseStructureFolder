import { getApiAxios } from "../../services/axios-get-api.services";
import { deleteApiAxios } from "../../services/axios-delete-api.services";
import { putApiAxios } from "../../services/axios-put-api.services";
import {
  getDetailsTechStackSucess,
  getTechStackError,
  getTechStackPending,
  getTechStackSuccess,
  sendingRequestTechStackSucess,
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

export const getDetailsTechStack = id => dispatch => {
  const apiTechStack = process.env.REACT_APP_API_SERVER_TECH_STACK + "/" + id;
  getApiAxios(
    apiTechStack,
    dispatch,
    getTechStackPending,
    getDetailsTechStackSucess,
    getTechStackError,
  );
};

export const deleteTechStack = id => dispatch => {
  const apiTechStack = process.env.REACT_APP_API_SERVER_TECH_STACK + "/" + id;
  deleteApiAxios(apiTechStack, dispatch, getTechStackPending,
    sendingRequestTechStackSucess, getTechStackError);
};

export const updateTechStack = (id, dataTechStack) => dispatch => {
  const apiTechStack = process.env.REACT_APP_API_SERVER_TECH_STACK + "/" + id;
  putApiAxios(apiTechStack, dispatch, dataTechStack,
    getTechStackPending, sendingRequestTechStackSucess, getTechStackError);
};
