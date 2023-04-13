import {
  GET_ALL_MEETINGS_REQUEST,
  GET_ALL_MEETINGS_SUCCESS,
  GET_ALL_MEETINGS_FAILED,
} from "../constants/meetingConstants";

export const meetingsReducer = (state = { meetings: [] }, action) => {
  switch (action.type) {
    case GET_ALL_MEETINGS_REQUEST:
      return {
        loading: true,
        meetings: [],
      };
    case GET_ALL_MEETINGS_SUCCESS:
      return {
        loading: false,
        meetings: action.payload,
      };
    case GET_ALL_MEETINGS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
