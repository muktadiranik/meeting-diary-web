import axios from "axios";
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
import { toast } from "react-toastify";

export const getAuthTokenAction = (formData) => async (dispatch) => {
  dispatch({ type: GET_AUTH_TOKEN_REQUEST });
  toast
    .promise(
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/login/`, formData)
        .then((response) => {
          return response.data;
        }),
      {
        pending: "Logging in...",
        success: "Logged in successfully",
        error: "Failed to log in",
      }
    )
    .then((data) => {
      dispatch({ type: GET_AUTH_TOKEN_SUCCESS, payload: data.key });
      localStorage.setItem("key", data.key);
      dispatch(getUserDetailsAction());
    })
    .catch((error) => {
      dispatch({ type: GET_AUTH_TOKEN_FAILED, payload: error });
    });
};

export const getUserDetailsAction = () => async (dispatch, getState) => {
  dispatch({ type: GET_USER_DETAILS_REQUEST });
  const {
    authReducer: { token },
  } = getState();
  axios
    .get(`${process.env.REACT_APP_API_URL}/auth/user/`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => {
      dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch((error) => {
      dispatch({ type: GET_USER_DETAILS_FAILED, payload: error });
    });
};

export const removeAuthTokenAction = () => async (dispatch) => {
  dispatch({ type: REMOVE_AUTH_TOKEN_REQUEST });
  toast
    .promise(
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/logout/`)
        .then((response) => {
          return response.data;
        }),
      {
        pending: "Logging out...",
        success: "Logged out successfully",
        error: "Failed to log out",
      }
    )
    .then((data) => {
      dispatch({ type: REMOVE_AUTH_TOKEN_SUCCESS, payload: data });
      localStorage.removeItem("key");
    })
    .catch((error) => {
      dispatch({ type: REMOVE_AUTH_TOKEN_FAILED, payload: error });
    });
};
