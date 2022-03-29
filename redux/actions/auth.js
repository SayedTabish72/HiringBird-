import axios from "../../utils/axios";
import {
  LOGOUT_USER,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/auth";

export const signin = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: SIGNIN_REQUEST });
    const res = await axios.post("/login", formData);
    dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
    router.query.redirect && router.push("/");
  } catch (err) {
    dispatch({
      type: SIGNIN_FAILURE,
      // err obj
      payload: err?.response?.data,
    });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });
    const res = await axios.post("/register", formData);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    router.push("/signin");
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILURE,
      // err obj
      payload: err?.response?.data,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
