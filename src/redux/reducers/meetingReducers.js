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

export const allMeetingReducer = (state = { meetings: [] }, action) => {
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

export const addMeetingReducer = (state = { addedMeeting: {} }, action) => {
  switch (action.type) {
    case ADD_MEETING_REQUEST:
      return {
        loading: true,
      };
    case ADD_MEETING_SUCCESS:
      return {
        loading: false,
        addedMeeting: action.payload,
      };
    case ADD_MEETING_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const meetingDetailsReducer = (state = { meeting: {} }, action) => {
  switch (action.type) {
    case GET_MEETING_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_MEETING_DETAILS_SUCCESS:
      return {
        loading: false,
        meeting: action.payload,
      };
    case GET_MEETING_DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteMeetingReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MEETING_REQUEST:
      return {
        loading: true,
        deleteMeetingSuccess: false,
      };
    case DELETE_MEETING_SUCCESS:
      return {
        loading: false,
        deleteMeetingSuccess: true,
      };
    case DELETE_MEETING_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUpdateMeetingReducer = (
  state = { updateMeeting: {} },
  action
) => {
  switch (action.type) {
    case GET_UPDATE_MEETING_REQUEST:
      return {
        loading: true,
      };
    case GET_UPDATE_MEETING_SUCCESS:
      return {
        loading: false,
        updateMeeting: action.payload,
      };
    case GET_UPDATE_MEETING_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_UPDATE_MEETING_RESET:
      return {
        updateMeeting: {},
      };
    default:
      return state;
  }
};

export const updateMeetingReducer = (
  state = { updatedMeeting: {} },
  action
) => {
  switch (action.type) {
    case UPDATE_MEETING_REQUEST:
      return {
        loading: true,
        updatedMeeting: {},
      };
    case UPDATE_MEETING_SUCCESS:
      return {
        loading: false,
        updatedMeeting: action.payload,
      };
    case UPDATE_MEETING_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
