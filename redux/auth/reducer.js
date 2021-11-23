import { userActionTypes } from "./action";

const userInitialState = {
  isAuthenticated: false,
  user: null,
  errors: [],
};

export default function reducer(state = userInitialState, action) {
  switch (action.type) {
    case userActionTypes.login:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case userActionTypes.logout:
      localStorage.removeItem("access_token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case userActionTypes.setError:
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
