import Axios from "axios";
import { getTokenSesion } from "../utils/get-token-sesion";
import { checkStatusResponRedirectRouter } from "../utils/check-error-call-api";
const token = getTokenSesion("token");
export const getDetailsApiAxios = async (api, dispatch, getPending, getSuccess, getError) => {
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
    dispatch(getError());
  }
};
