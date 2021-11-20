import { userActionTypes } from "./action";

const userInitialState = {
  isAuthenticated: false,
  user: null,
  errors: null,
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
    default:
      return state;
  }
}
