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
  GET_UPDATE_COMMITTEE_RESET,
  UPDATE_COMMITTEE_REQUEST,
  UPDATE_COMMITTEE_SUCCESS,
  UPDATE_COMMITTEE_FAILED,
  GET_SEARCH_COMMITTEES_REQUEST,
  GET_SEARCH_COMMITTEES_SUCCESS,
  GET_SEARCH_COMMITTEES_FAILED,
} from "../constants/committeeConstants";

export const committeeReducer = (state = { committee: {} }, action) => {
  switch (action.type) {
    case GET_COMMITTEE_DETAILS_REQUEST:
      return { ...state, loading: true, committee: {} };
    case GET_COMMITTEE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        committee: action.payload,
      };
    case GET_COMMITTEE_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addCommitteeReducer = (state = { addedCommittee: {} }, action) => {
  switch (action.type) {
    case ADD_COMMITTEE_REQUEST:
      return { ...state, loading: true, addedCommittee: {} };
    case ADD_COMMITTEE_SUCCESS:
      return {
        ...state,
        loading: false,
        addedCommittee: action.payload,
      };
    case ADD_COMMITTEE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const AllCommitteesReducer = (state = { committees: [] }, action) => {
  switch (action.type) {
    case GET_ALL_COMMITTEES_REQUEST:
      return { ...state, loading: true, committees: [] };
    case GET_ALL_COMMITTEES_SUCCESS:
      return { ...state, loading: false, committees: action.payload };
    case GET_ALL_COMMITTEES_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_SEARCH_COMMITTEES_REQUEST:
      return { ...state, loading: true, committees: [] };
    case GET_SEARCH_COMMITTEES_SUCCESS:
      return { ...state, loading: false, committees: action.payload };
    case GET_SEARCH_COMMITTEES_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteCommitteeReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COMMITTEE_REQUEST:
      return { ...state, loading: true, deleteCommitteeSuccess: false };
    case DELETE_COMMITTEE_SUCCESS:
      return { ...state, loading: false, deleteCommitteeSuccess: true };
    case DELETE_COMMITTEE_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUpdateCommitteeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_UPDATE_COMMITTEE_REQUEST:
      return { ...state, loading: true, updateCommittee: {} };
    case GET_UPDATE_COMMITTEE_SUCCESS:
      return { ...state, loading: false, updateCommittee: action.payload };
    case GET_UPDATE_COMMITTEE_FAILED:
      return { ...state, loading: false, error: action.payload };
    case GET_UPDATE_COMMITTEE_RESET:
      return { ...state, updateCommittee: {} };
    default:
      return state;
  }
};

export const updateCommitteeReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_COMMITTEE_REQUEST:
      return { ...state, loading: true, updatedCommittee: {} };
    case UPDATE_COMMITTEE_SUCCESS:
      return { ...state, loading: false, updatedCommittee: action.payload };
    case UPDATE_COMMITTEE_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
