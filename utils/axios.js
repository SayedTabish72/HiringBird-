import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.42.7.36:8800/api/v1",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage?.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default instance;
