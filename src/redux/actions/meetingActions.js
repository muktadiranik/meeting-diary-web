import axios from "axios";
import {
  GET_ALL_MEETINGS_REQUEST,
  GET_ALL_MEETINGS_SUCCESS,
  GET_ALL_MEETINGS_FAILED,
} from "../constants/meetingConstants";

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
