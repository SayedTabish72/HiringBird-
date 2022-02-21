import axios from "../../utils/axios";

export const fetchInternships = (page) => async (dispatch) => {
  try {
    const res = await axios.get(`/internship?page=${page}&limit=12`);
    dispatch({ type: "FETCH_INTERNSHIPS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({
      type: "FETCH_INTERNSHIPS_FAILURE",
      payload: err?.response?.data,
    });
  }
};

export const resetInternships = () => (dispatch) => {
  dispatch({ type: "RESET_INTERNSHIPS" });
};

export const fetchInternshipById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/internship/${id}`);
    dispatch({ type: "FETCH_INTERNSHIP_BY_ID_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({
      type: "FETCH_INTERNSHIP_BY_ID_FAILURE",
      payload: error?.response?.data,
    });
  }
};

export const resetInternshipById = () => (dispatch) => {
  dispatch({ type: "RESET_INTERNSHIP_BY_ID" });
};
