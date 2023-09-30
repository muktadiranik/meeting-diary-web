import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "./redux/reducers/authReducers";
import { departmentReducer, departmentDetailsReducer } from "./redux/reducers/departmentReducers";
import { committeeReducer, addCommitteeReducer, AllCommitteesReducer, deleteCommitteeReducer, getUpdateCommitteeReducer, updateCommitteeReducer } from "./redux/reducers/committeeReducers";
import { AllMembersReducer, addMemberReducer, deleteMemberReducer, getUpdateMemberReducer, updateMemberReducer } from "./redux/reducers/memberReducers";
import { allMeetingReducer, addMeetingReducer, meetingDetailsReducer, deleteMeetingReducer, getUpdateMeetingReducer, updateMeetingReducer } from "./redux/reducers/meetingReducers";
import { searchResultReducer } from "./redux/reducers/searchReducers";

const middleware = [thunk];

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    departmentReducer: departmentReducer,
    departmentDetailsReducer: departmentDetailsReducer,
    committeeReducer: committeeReducer,
    addCommitteeReducer: addCommitteeReducer,
    addMemberReducer: addMemberReducer,
    AllMembersReducer: AllMembersReducer,
    AllCommitteesReducer: AllCommitteesReducer,
    deleteCommitteeReducer: deleteCommitteeReducer,
    deleteMemberReducer: deleteMemberReducer,
    getUpdateMemberReducer: getUpdateMemberReducer,
    updateMemberReducer: updateMemberReducer,
    getUpdateCommitteeReducer: getUpdateCommitteeReducer,
    updateCommitteeReducer: updateCommitteeReducer,
    allMeetingReducer: allMeetingReducer,
    addMeetingReducer: addMeetingReducer,
    meetingDetailsReducer: meetingDetailsReducer,
    deleteMeetingReducer: deleteMeetingReducer,
    getUpdateMeetingReducer: getUpdateMeetingReducer,
    updateMeetingReducer: updateMeetingReducer,
    searchResultReducer: searchResultReducer,
  },
  preloadedState: {
    authReducer: {
      token: localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null,
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    },
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});

export default store;
