import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeetingsAction } from "../redux/actions/meetingActions";
import { useParams } from "react-router-dom";
import AddMeetingModal from "./AddMeetingModal";
import Meeting from "./Meeting";

const MeetingList = () => {
  const dispatch = useDispatch();

  const { departmentId, committeeId } = useParams();

  const { meetings } = useSelector((state) => state.allMeetingReducer);
  const { addedMeeting } = useSelector((state) => state.addMeetingReducer);
  const { updatedMeeting } = useSelector((state) => state.updateMeetingReducer);
  const { deleteMeetingSuccess } = useSelector(
    (state) => state.deleteMeetingReducer
  );

  useEffect(() => {
    dispatch(getAllMeetingsAction(departmentId, committeeId));
  }, [
    dispatch,
    departmentId,
    committeeId,
    addedMeeting,
    deleteMeetingSuccess,
    updatedMeeting,
  ]);

  return (
    <div>
      <AddMeetingModal />
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <h1>Your Meetings</h1>
          </span>
          <div className="d-flex">
            <form className="d-flex" method="get">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Meetings"
                aria-label="Search"
                name="search_meeting"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <button
              type="button"
              className=" btn btn-outline-success ms-2"
              data-bs-toggle="modal"
              data-bs-target="#addMeetingModal">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </nav>
      {meetings?.map((meeting) => (
        <Meeting key={meeting.id} meeting={meeting} />
      ))}
    </div>
  );
};

export default MeetingList;
