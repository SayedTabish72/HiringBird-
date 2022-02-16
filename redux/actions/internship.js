import axios from "../../utils/axios";

export const fetchInternships = (page) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const res = await axios.get(`/internship?page=${page}&limit=1`);
    console.log({ res });
    dispatch({ type: "FETCH_INTERNSHIPS_SUCCESS", payload: res.data });
    dispatch({ type: "END_LOADING" });
  } catch (err) {
    dispatch({
      type: "ERROR",
      payload: err.response.data,
    });
    dispatch({ type: "END_LOADING" });
  }
};

export const fetchInternshipById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const res = await axios.get(`/internship/${id}`);
    console.log({ res });
    dispatch({ type: "FETCH_INTERNSHIP_BY_ID_SUCCESS", payload: res.data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: error.response.data,
    });
  }
};
