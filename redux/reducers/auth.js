import {
  LOGOUT_USER,
  SET_CURRENT_USER,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/auth";

export const initialState = {
  isAuthenticated: false,
  user: null,

  signinStatus: "idle",
  signinErrors: null,

  signupStatus: "idle",
  signupErrors: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        signinStatus: "loading",
        signinErrors: null,
      };

    case SIGNIN_SUCCESS:
      localStorage.setItem(
        "access_token",
        action.payload.authToken.accessToken
      );
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        signinStatus: "success",
        signinErrors: null,
      };

    case SIGNIN_FAILURE:
      return {
        ...state,
        signinStatus: "failure",
        signinErrors: action.payload.message,
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        signupStatus: "loading",
        signupErrors: null,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupStatus: "success",
        signupErrors: null,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        signupStatus: "failure",
        signupErrors: action.payload.message,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_USER:
      localStorage.removeItem("access_token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
}
