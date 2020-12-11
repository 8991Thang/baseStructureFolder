import { deleteApiAxios } from "../../services/axios-delete-api.services";
import { getApiAxios } from "../../services/axios-get-api.services";
import { postApiAxios } from "../../services/axios-post-api.services";
import { putApiAxios } from "../../services/axios-put-api.services";
import {
  detailsProjectStatus,
  getProjectStatusError, getProjectStatusPending,
  getProjectStatusSuccess,
  sendingRequestProjectTypeError,
  sendingRequestProjectTypePending,
  sendingRequestProjectTypeSuccess,
} from "./project-status.reducers";
export const getListProjectStatus = () => dispatch => {
  const apiProjectStatus = process.env.REACT_APP_API_SERVER_PROJECT_STATUS;
  getApiAxios(apiProjectStatus, dispatch, getProjectStatusPending,
    getProjectStatusSuccess, getProjectStatusError);
};

export const postProjectStatus = dataProjectStatus => dispatch => {
  const apiProjectStatus = process.env.REACT_APP_API_SERVER_PROJECT_STATUS;
  postApiAxios(
    apiProjectStatus,
    dispatch,
    dataProjectStatus,
    sendingRequestProjectTypePending,
    sendingRequestProjectTypeSuccess,
    sendingRequestProjectTypeError,
  );
};

export const getDetailsProjectStatus = id => dispatch => {
  const apiProjectStatus = process.env.REACT_APP_API_SERVER_PROJECT_STATUS + "/" + id;
  getApiAxios(
    apiProjectStatus,
    dispatch,
    getProjectStatusPending,
    detailsProjectStatus,
    sendingRequestProjectTypeError,
  );

};

export const deleteProjectStatus = id => dispatch => {
  const apiProjectStatus = process.env.REACT_APP_API_SERVER_PROJECT_STATUS + "/" + id;
  deleteApiAxios(apiProjectStatus, dispatch, sendingRequestProjectTypePending,
    sendingRequestProjectTypeSuccess, sendingRequestProjectTypeError);
};

export const updateProjectStatus = (id, dataProjectStatus) => async dispatch => {
  const apiProjectStatus = process.env.REACT_APP_API_SERVER_PROJECT_STATUS + "/" + id;
  await putApiAxios(
    apiProjectStatus,
    dispatch,
    dataProjectStatus,
    sendingRequestProjectTypePending,
    sendingRequestProjectTypeSuccess,
    sendingRequestProjectTypeSuccess, sendingRequestProjectTypeError);

};
