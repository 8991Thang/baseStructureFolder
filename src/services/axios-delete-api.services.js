import Axios from "axios";
import { checkStatusResponRedirectRouter } from "../utils/check-error-call-api";
import { getTokenSesion } from "../utils/get-token-sesion";

const token = getTokenSesion("token");
export const deleteApiAxios = async (api, dispatch, deletePending,
  delteteSuccess, delteteError, id) => {
  if (!token) checkStatusResponRedirectRouter();
  dispatch(deletePending());
  try {
    const respon = await Axios.delete(api, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (respon.status === 200)dispatch(delteteSuccess(id));
  }
  catch (error) {
    checkStatusResponRedirectRouter();
    dispatch(delteteError());
  }
};
