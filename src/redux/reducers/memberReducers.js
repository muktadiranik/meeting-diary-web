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

export const AllMembersReducer = (state = { members: [] }, action) => {
  switch (action.type) {
    case GET_ALL_MEMBERS_REQUEST:
      return { ...state, loading: true, members: [] };
    case GET_ALL_MEMBERS_SUCCESS:
      return { ...state, loading: false, members: action.payload };
    case GET_ALL_MEMBERS_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_SEARCH_MEMBERS_REQUEST:
      return { ...state, loading: true, members: [] };
    case GET_SEARCH_MEMBERS_SUCCESS:
      return { ...state, loading: false, members: action.payload };
    case GET_SEARCH_MEMBERS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addMemberReducer = (state = { addedMember: {} }, action) => {
  switch (action.type) {
    case ADD_MEMBER_REQUEST:
      return { ...state, loading: true, addedMember: {} };
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        addedMember: action.payload,
      };
    case ADD_MEMBER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MEMBER_REQUEST:
      return { ...state, loading: true, deleteMemberSuccess: false };
    case DELETE_MEMBER_SUCCESS:
      return { ...state, loading: false, deleteMemberSuccess: true };
    case DELETE_MEMBER_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUpdateMemberReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_UPDATE_MEMBER_REQUEST:
      return { ...state, loading: true };
    case GET_UPDATE_MEMBER_SUCCESS:
      return { ...state, loading: false, updateMember: action.payload };
    case GET_UPDATE_MEMBER_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateMemberReducer = (state = { updatedMember: {} }, action) => {
  switch (action.type) {
    case UPDATE_MEMBER_REQUEST:
      return { ...state, loading: true, updatedMember: {} };
    case UPDATE_MEMBER_SUCCESS:
      return { ...state, loading: false, updatedMember: action.payload };
    case UPDATE_MEMBER_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
