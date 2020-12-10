import { getApiAxios } from "../../services/axios-get--api.services";
import { getProjectTypePending, getProjectTypeSucess } from "./project-type.reducers";

export const getDataProjectTypeFromApi = () => dispatch => {
  const apiProjectType = process.env.REACT_APP_API_SERVER_PROJECT_TYPE;
  getApiAxios(apiProjectType, dispatch, getProjectTypePending, getProjectTypeSucess);
};
export const creatNewProjectType = newProjectType => () => {
  console.log(newProjectType);
};
