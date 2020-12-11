import { deleteApiAxios } from "../../services/axios-delete-api.services";
import { getApiAxios } from "../../services/axios-get-api.services";
import { postApiAxios } from "../../services/axios-post-api.services";
import { putApiAxios } from "../../services/axios-put-api.services";
import { getDetailsProjectTypeError, getDetailsProjectTypePending, getDetailsProjectTypeSucess, getProjectTypePending, getProjectTypeSucess, projectTypeUpdate, sendingRequestProjectTypeError, sendingRequestProjectTypePending, sendingRequestProjectTypeSucess } from "./project-type.reducers";

export const getDataProjectTypeFromApi = () => dispatch => {
  const apiProjectType = process.env.REACT_APP_API_SERVER_PROJECT_TYPE;
  getApiAxios(apiProjectType, dispatch, getProjectTypePending, getProjectTypeSucess);
};
export const creatNewProjectType = newProjectType => dispatch => {
  const apiProjectType = process.env.REACT_APP_API_SERVER_PROJECT_TYPE;
  postApiAxios(
    apiProjectType,
    dispatch,
    newProjectType,
    sendingRequestProjectTypePending,
    sendingRequestProjectTypeSucess,
    sendingRequestProjectTypeError,
  );
};

export const getDetailsProjectType = id => dispatch => {
  const apiProjectType = process.env.REACT_APP_API_SERVER_PROJECT_TYPE + "/" + id;
  getApiAxios(apiProjectType, dispatch, getDetailsProjectTypePending,
    getDetailsProjectTypeSucess, getDetailsProjectTypeError);
};

export const deleteProjectType = id => () => {
  const apiProjectType = process.env.REACT_APP_API_SERVER_PROJECT_TYPE + "/" + id;
  deleteApiAxios(
    apiProjectType,
    sendingRequestProjectTypePending,
    sendingRequestProjectTypeSucess, sendingRequestProjectTypeError, id
  );
};
export const updateProjectType = (id, dataProjectTypes) => dispatch => {
  const apiProjectType = process.env.REACT_APP_API_SERVER_PROJECT_TYPE + "/" + id;
  putApiAxios(
    apiProjectType,
    dispatch,
    dataProjectTypes,
    sendingRequestProjectTypePending,
    projectTypeUpdate,
    sendingRequestProjectTypeError,
    id,
  );
};
