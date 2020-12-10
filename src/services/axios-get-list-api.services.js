import Axios from "axios";
import { checkStatusResponRedirectRouter } from "../utils/check-error-call-api";
import { getTokenSesion } from "../utils/get-token-sesion";

const token = getTokenSesion("token");
export const getApiAxios = async (api, dispatch, getPending, getSuccess, getError) => {
  if (!token) checkStatusResponRedirectRouter();
  dispatch(getPending());
  try {
    const respon = await Axios.get(api, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { data } = respon.data;
    dispatch(getSuccess(data));
  }
  catch (error) {
    checkStatusResponRedirectRouter();
    dispatch(getError());
  }
};
