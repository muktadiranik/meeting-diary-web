import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeetingsAction } from "../redux/actions/meetingActions";
import { useParams } from "react-router-dom";

const MeetingList = () => {
  const dispatch = useDispatch();

  const { departmentId, committeeId } = useParams();

  const { meetings } = useSelector((state) => state.meetingReducer);

  useEffect(() => {
    dispatch(getAllMeetingsAction(departmentId, committeeId));
  }, [dispatch, departmentId, committeeId]);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            <h1>Your Meetings</h1>
          </span>
        </div>
      </nav>
      {meetings?.map((meeting) => (
        <div className=" card mt-2 mb-2">
          <h3 className=" card-header">{meeting.title}</h3>
          <div className="card-body"></div>
        </div>
      ))}
    </div>
  );
};

export default MeetingList;
