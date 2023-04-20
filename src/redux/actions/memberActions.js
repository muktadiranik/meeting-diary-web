import axios from "axios";
import {
  GET_ALL_MEMBERS_REQUEST,
  GET_ALL_MEMBERS_SUCCESS,
  GET_ALL_MEMBERS_FAILED,
  ADD_MEMBER_REQUEST,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_FAILED,
  DELETE_MEMBER_REQUEST,
  DELETE_MEMBER_SUCCESS,
  DELETE_MEMBER_FAILED,
  GET_UPDATE_MEMBER_REQUEST,
  GET_UPDATE_MEMBER_SUCCESS,
  GET_UPDATE_MEMBER_FAILED,
  UPDATE_MEMBER_REQUEST,
  UPDATE_MEMBER_SUCCESS,
  UPDATE_MEMBER_FAILED,
  GET_SEARCH_MEMBERS_REQUEST,
  GET_SEARCH_MEMBERS_SUCCESS,
  GET_SEARCH_MEMBERS_FAILED,
} from "../constants/memberConstants";
import { toast } from "react-toastify";

export const getAllMembersAction =
  (departmentId) => async (dispatch, getState) => {
    dispatch({ type: GET_ALL_MEMBERS_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/members/`,
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
        dispatch({ type: GET_ALL_MEMBERS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_ALL_MEMBERS_FAILED, payload: error });
      });
  };

export const getSearchMembersAction =
  (departmentId, search) => async (dispatch, getState) => {
    dispatch({ type: GET_SEARCH_MEMBERS_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/members/?search=${search}`,
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
        dispatch({ type: GET_SEARCH_MEMBERS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_SEARCH_MEMBERS_FAILED, payload: error });
      });
  };

export const addMemberAction =
  (departmentId, member) => async (dispatch, getState) => {
    dispatch({ type: ADD_MEMBER_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.post(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/members/`,
          member,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Adding member...",
          success: "Member added successfully",
          error: "Failed to add member",
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: ADD_MEMBER_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: ADD_MEMBER_FAILED, payload: error });
      });
  };

export const deleteMemberAction =
  (departmentId, memberId) => async (dispatch, getState) => {
    dispatch({ type: DELETE_MEMBER_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.delete(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/members/${memberId}/`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Deleting member...",
          success: "Member deleted successfully",
          error: "Failed to delete member",
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: DELETE_MEMBER_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: DELETE_MEMBER_FAILED, payload: error });
      });
  };

export const getUpdateMemberAction =
  (departmentId, memberId) => async (dispatch, getState) => {
    dispatch({ type: GET_UPDATE_MEMBER_REQUEST });
    const {
      authReducer: { token },
    } = getState();

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/members/${memberId}/`,
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
        dispatch({ type: GET_UPDATE_MEMBER_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_UPDATE_MEMBER_FAILED, payload: error });
      });
  };

export const updateMemberAction =
  (departmentId, memberId, member) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_MEMBER_REQUEST });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.put(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/members/${memberId}/`,
          member,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Updating member...",
          success: "Member updated successfully",
          error: "Failed to update member",
        }
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({ type: UPDATE_MEMBER_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_MEMBER_FAILED, payload: error });
      });
  };
