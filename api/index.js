import axios from "axios";
import { login, setError } from "../redux/auth/action";

export const Login = (formData, id, router) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:8800/login`, {
      email: formData.email,
      password: formData.password,
    });
    localStorage.setItem("access_token", response.data.authToken.accessToken);
    dispatch(login(response.data));

    if (id) {
      // router.push(`/internship/questions/${id}`);
      router.push({
        pathname: "/internship/questions/[id]",
        query: { id },
      });
    } else {
      router.push("/");
    }
  } catch (error) {
    dispatch(setError(error.response.data.message));
  }
};
