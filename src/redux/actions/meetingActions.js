import axios from "axios";
import {
  GET_ALL_MEETINGS_REQUEST,
  GET_ALL_MEETINGS_SUCCESS,
  GET_ALL_MEETINGS_FAILED,
  ADD_MEETING_REQUEST,
  ADD_MEETING_SUCCESS,
  ADD_MEETING_FAILED,
  GET_MEETING_DETAILS_REQUEST,
  GET_MEETING_DETAILS_SUCCESS,
  GET_MEETING_DETAILS_FAILED,
  DELETE_MEETING_REQUEST,
  DELETE_MEETING_SUCCESS,
  DELETE_MEETING_FAILED,
  GET_UPDATE_MEETING_REQUEST,
  GET_UPDATE_MEETING_SUCCESS,
  GET_UPDATE_MEETING_FAILED,
  GET_UPDATE_MEETING_RESET,
  UPDATE_MEETING_REQUEST,
  UPDATE_MEETING_SUCCESS,
  UPDATE_MEETING_FAILED,
} from "../constants/meetingConstants";
import { toast } from "react-toastify";

export const getAllMeetingsAction =
  (departmentId, committeeId) => async (dispatch, getState) => {
    dispatch({
      type: GET_ALL_MEETINGS_REQUEST,
    });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/meetings/`,
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
        dispatch({ type: GET_ALL_MEETINGS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_ALL_MEETINGS_FAILED, payload: error });
      });
  };

export const addMeetingAction =
  (
    departmentId,
    committeeId,
    title,
    description,
    content,
    meetingTime,
    invitedMember
  ) =>
  async (dispatch, getState) => {
    dispatch({
      type: ADD_MEETING_REQUEST,
    });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.post(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/meetings/`,
          {
            title: title,
            description: description,
            content: content,
            meeting_time: meetingTime,
            invited_member: invitedMember,
          },
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Adding Meeting...",
          success: "Meeting Added Successfully",
          error: "Error Adding Meeting",
        }
      )
      .then((response) => {
        dispatch({ type: ADD_MEETING_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ADD_MEETING_FAILED, payload: error });
      });
  };

export const getMeetingDetailsAction =
  (departmentId, committeeId, meetingId) => async (dispatch, getState) => {
    dispatch({
      type: GET_MEETING_DETAILS_REQUEST,
    });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/meetings/${meetingId}/`,
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
        dispatch({ type: GET_MEETING_DETAILS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_MEETING_DETAILS_FAILED, payload: error });
      });
  };

export const deleteMeetingAction =
  (departmentId, committeeId, meetingId) => async (dispatch, getState) => {
    dispatch({
      type: DELETE_MEETING_REQUEST,
    });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.delete(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/meetings/${meetingId}/`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Deleting Meeting...",
          success: "Meeting Deleted Successfully",
          error: "Error Deleting Meeting",
        }
      )
      .then((response) => {
        dispatch({ type: DELETE_MEETING_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: DELETE_MEETING_FAILED, payload: error });
      });
  };

export const getUpdateMeetingAction =
  (departmentId, committeeId, meetingId) => async (dispatch, getState) => {
    dispatch({
      type: GET_UPDATE_MEETING_REQUEST,
    });
    const {
      authReducer: { token },
    } = getState();
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/meetings/${meetingId}/`,
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
        dispatch({ type: GET_UPDATE_MEETING_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: GET_UPDATE_MEETING_FAILED, payload: error });
      });
  };

export const resetGetUpdateMeetingAction = () => async (dispatch) => {
  dispatch({
    type: GET_UPDATE_MEETING_RESET,
    payload: {},
  });
};

export const updateMeetingAction =
  (
    departmentId,
    committeeId,
    meetingId,
    title,
    description,
    content,
    meetingTime,
    invitedMember
  ) =>
  async (dispatch, getState) => {
    dispatch({
      type: UPDATE_MEETING_REQUEST,
    });
    const {
      authReducer: { token },
    } = getState();
    toast
      .promise(
        axios.put(
          `${process.env.REACT_APP_API_URL}/departments/${departmentId}/committees/${committeeId}/meetings/${meetingId}/`,
          {
            title: title,
            description: description,
            content: content,
            meeting_time: meetingTime,
            invited_member: invitedMember,
          },
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        ),
        {
          pending: "Updating Meeting...",
          success: "Meeting Updated Successfully",
          error: "Error Updating Meeting",
        }
      )
      .then((response) => {
        dispatch({ type: UPDATE_MEETING_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_MEETING_FAILED, payload: error });
      });
  };
