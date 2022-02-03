import { LOGIN, LOGOUT, ERRORS } from "../constants/auth";

export const initialState = {
  isAuthenticated: false,
  user: null,
  errors: [],
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
    case ERRORS:
      console.log(action.payload);
      return {
        ...state,
        errors: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
      };
    default:
      return state;
  }
}
