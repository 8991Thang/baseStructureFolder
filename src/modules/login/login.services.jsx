import axios from "axios";
import { getTokenError, getTokenPending, getTokenSuccess } from "./login.reducers";
export const getTokenUserLogin = acountLogin => async dispatch => {
  dispatch(getTokenPending());
  try {
    const serverApiLogin = process.env.REACT_APP_LOGIN_SERVER;
    const email = acountLogin.email;
    const password = acountLogin.password;
    const respon = await axios.post(serverApiLogin, { email, password });
    const { accessToken } = respon.data.data;
    dispatch(getTokenSuccess(accessToken));
  }
  catch (error) {
    dispatch(getTokenError());
  }
};
