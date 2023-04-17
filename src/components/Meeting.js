import React from "react";
import parse from "html-react-parser";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteMeetingAction,
  getUpdateMeetingAction,
} from "../redux/actions/meetingActions";
import UpdateMeetingModal from "./UpdateMeetingModal";

const Meeting = ({ meeting }) => {
  const { departmentId, committeeId } = useParams();

  const dispatch = useDispatch();

  const confirmDeleteMeeting = (departmentId, committeeId, meetingId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meeting?"
    );
    if (confirmDelete) {
      dispatch(deleteMeetingAction(departmentId, committeeId, meetingId));
    }
  };

  return (
    <div className="card mt-2 mb-2">
      <UpdateMeetingModal />
      <h3 className="card-header">{meeting?.title}</h3>
      <div className="card-body">
        {meeting?.description && (
          <div className="card-title">{parse(meeting?.description)}</div>
        )}
        <div className=" card-footer">
          <div className=" btn btn-group">
            <button className=" btn btn-outline-info" type="button">
              <Link
                type="button"
                to={`/departments/${departmentId}/committees/${committeeId}/meetings/${meeting?.id}`}>
                <i className="fa-solid fa-eye"></i>
              </Link>
            </button>
            <button
              className=" btn btn-outline-warning"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#updateMeetingModal"
              onClick={() => {
                dispatch(
                  getUpdateMeetingAction(departmentId, committeeId, meeting?.id)
                );
              }}>
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button
              className=" btn btn-outline-danger"
              type="button"
              onClick={() =>
                confirmDeleteMeeting(departmentId, committeeId, meeting?.id)
              }>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
