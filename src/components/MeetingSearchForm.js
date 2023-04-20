import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchMeetingsAction } from "../redux/actions/meetingActions";

const MeetingSearchForm = () => {
  const dispatch = useDispatch();

  const { departmentId, committeeId } = useParams();

  const searchMeeting = (e) => {
    e.preventDefault();
    dispatch(
      getSearchMeetingsAction(
        departmentId,
        committeeId,
        e.target.search_meeting.value
      )
    );
  };

  return (
    <>
      <form className="d-flex" method="get" onSubmit={searchMeeting}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Meetings"
          aria-label="Search"
          name="search_meeting"
          onChange={(e) => {
            dispatch(
              getSearchMeetingsAction(departmentId, committeeId, e.target.value)
            );
          }}
        />
        <button className="btn btn-outline-success" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default MeetingSearchForm;
