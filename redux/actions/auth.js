import axios from "../../utils/axios";
import { ERRORS, LOGIN, LOGOUT, SIGNIN_ERRORS } from "../constants/auth";

export const signin = (formData, id, router) => async (dispatch) => {
  try {
    const res = await axios.post("/login", formData);
    dispatch({ type: LOGIN, payload: res.data });
    id
      ? router.push({
          pathname: "/internship/question/[id]",
          query: { id },
        })
      : router.push("/");
  } catch (err) {
    dispatch({
      type: SIGNIN_ERRORS,
      payload: err.response.data,
    });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const res = await axios.post("/register", formData);
    dispatch({ type: LOGIN, payload: res.data });
    router.push("/signin");
  } catch (err) {
    dispatch({
      type: ERRORS,
      payload: err.response.data,
    });
  }
};

export const logout = (router) => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  router.push("/signin");
};
