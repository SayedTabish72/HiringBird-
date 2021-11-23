export const userActionTypes = {
  login: "LOGIN",
  logout: "LOGOUT",
  setError: "SET_ERROR",
};

export const login = (payload) => ({ type: userActionTypes.login, payload });
export const logout = () => ({ type: userActionTypes.logout });
export const setError = (payload) => ({
  type: userActionTypes.setError,
  payload,
});
