import React, { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllMembersAction } from "../redux/actions/memberActions";
import { useParams } from "react-router-dom";
import {
  updateMeetingAction,
  resetGetUpdateMeetingAction,
} from "../redux/actions/meetingActions";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

const UpdateMeetingModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [invitedMember, setInvitedMember] = useState([]);

  const dispatch = useDispatch();

  const { departmentId, committeeId } = useParams();

  const { members } = useSelector((state) => state.AllMembersReducer);
  const { updatedMeeting } = useSelector((state) => state.updateMeetingReducer);
  const { updateMeeting } = useSelector(
    (state) => state.getUpdateMeetingReducer
  );

  useEffect(() => {
    if (updateMeeting) {
      setTitle(updateMeeting?.title);
      setDescription(updateMeeting?.description);
      setContent(updateMeeting?.content);
      setMeetingTime(updateMeeting?.meeting_time);
      setInvitedMember(updateMeeting?.invited_member);
    }
  }, [updateMeeting]);

  useEffect(() => {
    if (members.length === 0) dispatch(getAllMembersAction(departmentId));
  }, [dispatch, departmentId, members]);

  let options = [];
  for (let i = 0; i < members.length; i++) {
    const element = members[i];
    options.push({ value: element.id, label: element.full_name });
  }

  const closeRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateMeetingAction(
        departmentId,
        committeeId,
        updateMeeting?.id,
        title,
        description,
        content,
        meetingTime,
        invitedMember
      )
    );
  };

  useEffect(() => {
    if (updatedMeeting) {
      setTitle("");
      setDescription("");
      setContent("");
      setMeetingTime("");
      setInvitedMember([]);
      closeRef.current.click();
    }
  }, [updatedMeeting]);

  return (
    <div
      className="modal fade"
      id="updateMeetingModal"
      tabIndex="-1"
      aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <form onSubmit={onSubmitHandler}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Meeting</h5>
              <button
                onClick={() => {
                  dispatch(resetGetUpdateMeetingAction());
                }}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Content</label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                />
              </div>
              {updateMeeting?.meeting_time && (
                <div className="mb-3">
                  <label className="form-label">Meeting Time</label>
                  <Datetime
                    initialValue={moment(updateMeeting?.meeting_time)}
                    onChange={(e) => {
                      setMeetingTime(e);
                    }}
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label">Invited Members</label>
                {updateMeeting?.invited_member && (
                  <Select
                    defaultValue={() => {
                      let arr = [];
                      for (
                        let i = 0;
                        i < updateMeeting?.invited_member?.length;
                        i++
                      ) {
                        for (let j = 0; j < members?.length; j++) {
                          if (
                            updateMeeting?.invited_member[i] === members[j]?.id
                          ) {
                            arr.push({
                              value: members[j]?.id,
                              label: members[j]?.full_name,
                            });
                          }
                        }
                      }
                      return arr;
                    }}
                    options={options}
                    isMulti
                    onChange={(e) => {
                      setInvitedMember(e.map((item) => item.value));
                    }}
                  />
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  dispatch(resetGetUpdateMeetingAction());
                }}
                ref={closeRef}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMeetingModal;
