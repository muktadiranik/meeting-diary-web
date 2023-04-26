import axios from "axios";
import {
  GET_SEARCH_RESULT_REQUEST,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_FAILED,
} from "../constants/searchConstants";

export const getSearchResultAction = (search) => async (dispatch, getState) => {
  dispatch({ type: GET_SEARCH_RESULT_REQUEST });
  const {
    authReducer: { token },
  } = getState();
  axios
    .get(`${process.env.REACT_APP_API_URL}/search/?search=${search}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: GET_SEARCH_RESULT_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_SEARCH_RESULT_FAILED, payload: error });
    });
};
