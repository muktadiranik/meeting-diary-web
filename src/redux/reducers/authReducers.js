import {
  GET_AUTH_TOKEN_REQUEST,
  GET_AUTH_TOKEN_SUCCESS,
  GET_AUTH_TOKEN_FAILED,
  REMOVE_AUTH_TOKEN_REQUEST,
  REMOVE_AUTH_TOKEN_SUCCESS,
  REMOVE_AUTH_TOKEN_FAILED,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILED,
} from "../constants/authConstants";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_AUTH_TOKEN_REQUEST:
      return { ...state, loading: true };
    case GET_AUTH_TOKEN_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case GET_AUTH_TOKEN_FAILED:
      return { ...state, loading: false, error: action.payload };
    case REMOVE_AUTH_TOKEN_REQUEST:
      return { ...state, loading: true };
    case REMOVE_AUTH_TOKEN_SUCCESS:
      return { ...state, loading: false, token: null };
    case REMOVE_AUTH_TOKEN_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case GET_USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case GET_USER_DETAILS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
