import Axios from "axios";
import { checkStatusResponRedirectRouter } from "../utils/check-error-call-api";
import { getTokenSesion } from "../utils/get-token-sesion";
const token = getTokenSesion("token");
export const putApiAxios = async (api, dispatch, dataInput, putPending,
  putSuccess, putError, id) => {
  if (!token) checkStatusResponRedirectRouter();
  dispatch(putPending());
  try {
    const respon = await Axios.put(api, dataInput, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (respon.status === 200) dispatch(putSuccess({ id, dataInput }));
  }
  catch (error) {
    checkStatusResponRedirectRouter();
    dispatch(putError(error));
  }
};
