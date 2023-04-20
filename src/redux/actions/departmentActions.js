import axios from "axios";
import {
  GET_ALL_DEPARTMENTS_REQUEST,
  GET_ALL_DEPARTMENTS_SUCCESS,
  GET_ALL_DEPARTMENTS_FAILED,
  GET_DEPARTMENT_DETAILS_REQUEST,
  GET_DEPARTMENT_DETAILS_SUCCESS,
  GET_DEPARTMENT_DETAILS_FAILED,
  GET_SEARCH_DEPARTMENTS_REQUEST,
  GET_SEARCH_DEPARTMENTS_SUCCESS,
  GET_SEARCH_DEPARTMENTS_FAILED,
} from "../constants/departmentConstants";

export const getAllDepartmentsAction = () => async (dispatch, getState) => {
  dispatch({ type: GET_ALL_DEPARTMENTS_REQUEST });
  const {
    authReducer: { token },
  } = getState();

  axios
    .get(`${process.env.REACT_APP_API_URL}/departments/`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({ type: GET_ALL_DEPARTMENTS_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({ type: GET_ALL_DEPARTMENTS_FAILED, payload: error });
    });
};

export const getSearchDepartmentsAction =
  (search) => async (dispatch, getState) => {
    dispatch({ type: GET_SEARCH_DEPARTMENTS_REQUEST });
    const {
      authReducer: { token },
    } = getState();

    axios
      .get(`${process.env.REACT_APP_API_URL}/departments/?search=${search}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: GET_SEARCH_DEPARTMENTS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_SEARCH_DEPARTMENTS_FAILED, payload: error });
      });
  };

export const getDepartmentDetailsAction =
  (departmentId) => async (dispatch, getState) => {
    dispatch({ type: GET_DEPARTMENT_DETAILS_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(`${process.env.REACT_APP_API_URL}/departments/${departmentId}/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: GET_DEPARTMENT_DETAILS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_DEPARTMENT_DETAILS_FAILED, payload: error });
      });
  };
