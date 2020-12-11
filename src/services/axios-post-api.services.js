import Axios from "axios";
import { checkStatusResponRedirectRouter } from "../utils/check-error-call-api";
import { getTokenSesion } from "../utils/get-token-sesion";
const token = getTokenSesion("token");
export const postApiAxios = async (api, dispatch, dataInput, postPending,
  postSuccess, postError) => {
  if (!token) checkStatusResponRedirectRouter();
  dispatch(postPending());

  try {
    const respon = await Axios.post(api, dataInput, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (respon.status === 200) dispatch(postSuccess(dataInput));

  }
  catch (error) {
    checkStatusResponRedirectRouter();
    dispatch(postError());
  }
};
