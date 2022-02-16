const initialState = {
  isLoading: true,
  internships: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case "FETCH_INTERNSHIPS_SUCCESS":
      return {
        ...state,
        internships: [...state.internships, ...action.payload.data],
        currentPage: action.payload.currPage,
        numberOfPages: action.payload.totalPages,
      };

    case "FETCH_INTERNSHIPS_FAILURE":
      return { ...state, error: action.payload };

    case "FETCH_INTERNSHIP_BY_ID_SUCCESS":
      return {
        ...state,
        internship: action.payload,
      };

    case "FETCH_INTERNSHIP_BY_ID_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
