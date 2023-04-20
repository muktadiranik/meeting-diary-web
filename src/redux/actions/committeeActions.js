import axios from "axios";
import {
  GET_COMMITTEE_DETAILS_REQUEST,
  GET_COMMITTEE_DETAILS_SUCCESS,
  GET_COMMITTEE_DETAILS_FAILED,
  ADD_COMMITTEE_REQUEST,
  ADD_COMMITTEE_SUCCESS,
  ADD_COMMITTEE_FAILED,
  GET_ALL_COMMITTEES_REQUEST,
  GET_ALL_COMMITTEES_SUCCESS,
  GET_ALL_COMMITTEES_FAILED,
  DELETE_COMMITTEE_REQUEST,
  DELETE_COMMITTEE_SUCCESS,
  DELETE_COMMITTEE_FAILED,
  GET_UPDATE_COMMITTEE_REQUEST,
  GET_UPDATE_COMMITTEE_SUCCESS,
  GET_UPDATE_COMMITTEE_FAILED,
  UPDATE_COMMITTEE_REQUEST,
  UPDATE_COMMITTEE_SUCCESS,
  UPDATE_COMMITTEE_FAILED,
  GET_UPDATE_COMMITTEE_RESET,
  GET_SEARCH_COMMITTEES_REQUEST,
  GET_SEARCH_COMMITTEES_SUCCESS,
  GET_SEARCH_COMMITTEES_FAILED,
} from "../constants/committeeConstants";
import { toast } from "react-toastify";

export const getCommitteeDetailsAction =
  (departmentId, committeeId) => async (dispatch, getState) => {
    dispatch({ type: GET_COMMITTEE_DETAILS_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: GET_COMMITTEE_DETAILS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_COMMITTEE_DETAILS_FAILED, payload: error });
      });
  };

export const addCommitteeAction =
  (departmentId, title, description, member) => async (dispatch, getState) => {
    dispatch({ type: ADD_COMMITTEE_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.post(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/`,
          {
            title: title,
            description: description,
            member: member,
          },
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Adding committee...",
          success: "Committee added successfully",
          error: "Failed to add committee",
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: ADD_COMMITTEE_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ADD_COMMITTEE_FAILED, payload: error });
      });
  };

export const getAllCommitteesAction =
  (departmentId) => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_COMMITTEES_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: GET_ALL_COMMITTEES_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_ALL_COMMITTEES_FAILED, payload: error });
      });
  };
export const getSearchCommitteesAction =
  (departmentId, search) => async (dispatch, getState) => {
    dispatch({ type: GET_SEARCH_COMMITTEES_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/?search=${search}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: GET_SEARCH_COMMITTEES_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_SEARCH_COMMITTEES_FAILED, payload: error });
      });
  };

export const deleteCommitteeAction =
  (departmentId, committeeId) => async (dispatch, getState) => {
    dispatch({ type: DELETE_COMMITTEE_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.delete(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Deleting committee...",
          success: "Committee deleted successfully",
          error: "Failed to delete committee",
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: DELETE_COMMITTEE_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: DELETE_COMMITTEE_FAILED, payload: error });
      });
  };

export const getUpdateCommitteeAction =
  (departmentId, committeeId) => async (dispatch, getState) => {
    dispatch({ type: GET_UPDATE_COMMITTEE_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: GET_UPDATE_COMMITTEE_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_UPDATE_COMMITTEE_FAILED, payload: error });
      });
  };

export const resetGetUpdateCommitteeAction = () => async (dispatch) => {
  dispatch({ type: GET_UPDATE_COMMITTEE_RESET, payload: {} });
};

export const updateCommitteeAction =
  (departmentId, committeeId, title, description, member) =>
  async (dispatch, getState) => {
    dispatch({ type: UPDATE_COMMITTEE_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.put(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/`,
          {
            title: title,
            description: description,
            member: member,
          },
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Updating committee...",
          success: "Committee updated successfully",
          error: "Failed to update committee",
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: UPDATE_COMMITTEE_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_COMMITTEE_FAILED, payload: error });
      });
  };
