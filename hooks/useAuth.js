import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { logout } from "../redux/actions/auth";
const useAuth = (dispatch) => {
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      const payload = jwt_decode(access_token);
      if (Date.now() >= payload.exp * 1000) {
        localStorage.removeItem("access_token");
        dispatch(logout());
      } else {
        dispatch({
          type: "SET_USER",
          payload: payload,
        });
      }
    }
  }, [dispatch]);
};

export default useAuth;
