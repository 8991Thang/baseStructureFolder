import Axios from "axios";
// import { checkStatusResponRedirectRouter } from "../utils/check-error-call-api";
import { getTokenSesion } from "../utils/get-token-sesion";
const token = getTokenSesion("token");
export const putApiAxios = async (api, dispatch, dataInput, putPending) => {
  // if (!token) checkStatusResponRedirectRouter();
  dispatch(putPending());
  const respon = await Axios.put(
    api,
    { data: dataInput },
    {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },

  );
  // const { data } = respon.data;
  console.log(respon);
  // try {
  //
  //   // dispatch(putSuccess(data));
  // }
  // catch (error) {
  //   // checkStatusResponRedirectRouter();
  //   dispatch(putError());
  // }
};
