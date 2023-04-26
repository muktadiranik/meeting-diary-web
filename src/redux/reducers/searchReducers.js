import {
  GET_SEARCH_RESULT_REQUEST,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_FAILED,
} from "../constants/searchConstants";

export const searchResultReducer = (state = { searchResult: {} }, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT_REQUEST:
      return { ...state, loading: true };
    case GET_SEARCH_RESULT_SUCCESS:
      return { ...state, loading: false, searchResult: action.payload };
    case GET_SEARCH_RESULT_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
