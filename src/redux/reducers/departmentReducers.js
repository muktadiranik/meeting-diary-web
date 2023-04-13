import {
  GET_ALL_DEPARTMENTS_REQUEST,
  GET_ALL_DEPARTMENTS_SUCCESS,
  GET_ALL_DEPARTMENTS_FAILED,
  GET_DEPARTMENT_DETAILS_REQUEST,
  GET_DEPARTMENT_DETAILS_SUCCESS,
  GET_DEPARTMENT_DETAILS_FAILED,
} from "../constants/departmentConstants";

export const departmentReducer = (state = { departments: [] }, action) => {
  switch (action.type) {
    case GET_ALL_DEPARTMENTS_REQUEST:
      return { ...state, loading: true, departments: [] };
    case GET_ALL_DEPARTMENTS_SUCCESS:
      return { ...state, loading: false, departments: action.payload };
    case GET_ALL_DEPARTMENTS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const departmentDetailsReducer = (
  state = { department: {} },
  action
) => {
  switch (action.type) {
    case GET_DEPARTMENT_DETAILS_REQUEST:
      return { ...state, loading: true, department: {} };
    case GET_DEPARTMENT_DETAILS_SUCCESS:
      return { ...state, loading: false, department: action.payload };
    case GET_DEPARTMENT_DETAILS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
