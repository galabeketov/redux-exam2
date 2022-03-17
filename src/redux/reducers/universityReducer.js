import { SET_CATEGORY, SET_ERROR, SET_LOADING, SET_UNIVERSITY } from "../types";

const initialState = {
  university: [],
  category: [],
  loading: false,
  error: false,
};

const universityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_UNIVERSITY:
      return { ...state, university: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

export default universityReducer;
