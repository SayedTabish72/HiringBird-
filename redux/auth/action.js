export const userActionTypes = {
  login: "LOGIN",
  logout: "LOGOUT",
};

export const login = (payload) => ({ type: userActionTypes.login, payload });
export const logout = () => ({ type: userActionTypes.logout });
