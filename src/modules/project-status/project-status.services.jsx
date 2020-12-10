import { getApiAxios } from "../../services/axios-get--api.services";
import { getProjectStatusError, getProjectStatusPending, getProjectStatusSuccess } from "./project-status.reducers";
export const getListProjectStatus = () => dispatch => {
  const apiProjectStatus = process.env.REACT_APP_API_SERVER_PROJECT_STATUS;
  getApiAxios(apiProjectStatus, dispatch, getProjectStatusPending,
    getProjectStatusSuccess, getProjectStatusError);
};
