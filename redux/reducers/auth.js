import { LOGIN, LOGOUT, SIGNIN_ERRORS } from "../constants/auth";

export const initialState = {
  isAuthenticated: false,
  user: null,
  error: {
    signin: null,
    signup: null,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("access_token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SIGNIN_ERRORS:
      console.log(action.payload);
      return {
        ...state,
        error: {
          ...state.error,
          signin: action.payload.message,
        },
      };
    default:
      return state;
  }
}
