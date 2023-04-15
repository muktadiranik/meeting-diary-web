import React, { useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllMembersAction } from "../redux/actions/memberActions";
import { useParams } from "react-router-dom";
import { addMeetingAction } from "../redux/actions/meetingActions";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const AddMeetingModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [invitedMember, setInvitedMember] = useState([]);

  const dispatch = useDispatch();

  const { departmentId, committeeId } = useParams();

  const { members } = useSelector((state) => state.AllMembersReducer);
  const { addedMeeting } = useSelector((state) => state.addMeetingReducer);

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
      addMeetingAction(
        departmentId,
        committeeId,
        title,
        description,
        content,
        meetingTime,
        invitedMember
      )
    );
  };

  useEffect(() => {
    if (addedMeeting) {
      setTitle("");
      setDescription("");
      setContent("");
      setMeetingTime("");
      setInvitedMember([]);
      closeRef.current.click();
    }
  }, [addedMeeting]);

  return (
    <div
      className="modal fade"
      id="addMeetingModal"
      tabIndex="-1"
      aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <form onSubmit={onSubmitHandler}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Meeting</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div class="mb-3">
                <label class="form-label">Title</label>
                <input
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <ReactQuill
                  theme="snow"
                  value={description}
                  onChange={setDescription}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Content</label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Meeting Time</label>
                <Datetime
                  onChange={(e) => {
                    setMeetingTime(e);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Invited Members</label>
                <Select
                  defaultValue={invitedMember}
                  options={options}
                  isMulti
                  onChange={(e) => {
                    setInvitedMember(e.map((item) => item.value));
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
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

export default AddMeetingModal;
