const initialState = {
  internships: [],
  internshipsStatus: "idle",
  internshipsError: null,

  internship: null,
  internshipStatus: "idle",
  internshipError: null,

  internshipApplyStatus: "idle",
  internshipApplyError: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // internships

    case "FETCH_INTERNSHIPS_PENDING":
      return {
        ...state,
        internshipsStatus: "loading",
      };

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
        internshipsStatus: "succeeded",
      };
    }

    case "FETCH_INTERNSHIPS_FAILURE":
      return {
        ...state,
        internshipsError: action.payload,
        internshipsStatus: "failed",
      };

    case "RESET_INTERNSHIPS":
      return {
        ...state,
        internships: [],
        internshipsStatus: "idle",
        currentPage: null,
        totalPages: null,
      };

    // internship
    case "FETCH_INTERNSHIP_PENDING":
      return {
        ...state,
        internshipStatus: "loading",
      };

    case "FETCH_INTERNSHIP_BY_ID_SUCCESS":
      return {
        ...state,
        internship: action.payload,
        internshipStatus: "succeeded",
      };

    case "FETCH_INTERNSHIP_BY_ID_FAILURE":
      return {
        ...state,
        internshipError: action.payload,
        internshipStatus: "failed",
      };

    case "RESET_INTERNSHIP_BY_ID":
      return {
        ...state,
        internship: null,
        internshipStatus: "idle",
      };

    case "INTERNSHIP_APPLY_PENDING":
      return {
        ...state,
        internshipApplyStatus: "loading",
      };

    case "INTERNSHIP_APPLY_SUCCESS":
      return {
        ...state,
        internshipApplyStatus: "succeeded",
      };

    case "INTERNSHIP_APPLY_FAILURE":
      return {
        ...state,
        internshipApplyError: action.payload,
        internshipApplyStatus: "failed",
      };

    case "RESET_INTERNSHIP_APPLY":
      return {
        ...state,
        internshipApplyStatus: "idle",
        internshipApplyError: null,
      };

    default:
      return state;
  }
}
