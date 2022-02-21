const initialState = {
  internships: [],
  internshipsLoading: true,
  internshipsError: null,

  internship: null,
  internshipLoading: true,
  internshipError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // internships
    case "FETCH_INTERNSHIPS_SUCCESS": {
      const internships = [...state.internships, ...action.payload.data];
      const uniqueInternships = internships.filter(
        (internship, index) =>
          internships.findIndex((i) => i.id === internship.id) === index
      );

      return {
        ...state,
        internships: uniqueInternships,
        currentPage: action.payload.currPage,
        totalPages: action.payload.totalPages,
        internshipsLoading: false,
      };
    }

    case "FETCH_INTERNSHIPS_FAILURE":
      return {
        ...state,
        internshipsError: action.payload,
        internshipsLoading: false,
      };

    case "RESET_INTERNSHIPS":
      return {
        ...state,
        internships: [],
        internshipsLoading: true,
      };

    // internship
    case "FETCH_INTERNSHIP_BY_ID_SUCCESS":
      return {
        ...state,
        internship: action.payload,
        internshipLoading: false,
      };

    case "FETCH_INTERNSHIP_BY_ID_FAILURE":
      return {
        ...state,
        internshipError: action.payload,
        internshipLoading: false,
      };

    case "RESET_INTERNSHIP_BY_ID":
      return {
        ...state,
        internship: null,
        internshipLoading: true,
      };

    default:
      return state;
  }
}
