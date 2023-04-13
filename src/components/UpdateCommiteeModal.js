import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import {
  updateCommitteeAction,
  resetGetUpdateCommitteeAction,
} from "../redux/actions/committeeActions";
import { useSelector } from "react-redux";
import Select from "react-select";

const UpdateCommiteeModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [member, setMember] = useState([]);

  const dispatch = useDispatch();

  const { updateCommittee } = useSelector(
    (state) => state.getUpdateCommitteeReducer
  );
  const { updatedCommittee } = useSelector(
    (state) => state.updateCommitteeReducer
  );
  const { members } = useSelector((state) => state.AllMembersReducer);

  const closeRef = useRef();

  const { departmentId } = useParams();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (member === updateCommittee?.member) {
      setMember(updateCommittee?.member);
    }
    dispatch(
      updateCommitteeAction(
        departmentId,
        updateCommittee?.id,
        title,
        description,
        member
      )
    );
  };

  useEffect(() => {
    setTitle("");
    setDescription("");
    setMember([]);
    closeRef.current.click();
  }, [updatedCommittee]);

  let options = [];
  for (let i = 0; i < members?.length; i++) {
    const element = members[i];
    options.push({ value: element?.id, label: element?.full_name });
  }

  useEffect(() => {
    setTitle(updateCommittee?.title);
    setDescription(updateCommittee?.description);
    setMember(updateCommittee?.member);
  }, [updateCommittee, members]);

  return (
    <div
      className="modal fade"
      id="updateCommitteeModal"
      tabIndex="-1"
      aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <form onSubmit={onSubmitHandler}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Committee</h5>
              <button
                onClick={() => {
                  dispatch(resetGetUpdateCommitteeAction());
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
                  name="title"
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
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
              {console.log(options)}
              {console.log(member)}
              <div className="mb-3">
                <label className="form-label">Select Members</label>
                {updateCommittee?.member && (
                  <Select
                    defaultValue={() => {
                      let arr = [];
                      for (
                        let i = 0;
                        i < updateCommittee?.member?.length;
                        i++
                      ) {
                        for (let j = 0; j < members?.length; j++) {
                          if (updateCommittee?.member[i] === members[j]?.id) {
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
                      setMember(e.map((item) => item.value));
                    }}
                  />
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => {
                  dispatch(resetGetUpdateCommitteeAction());
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

export default UpdateCommiteeModal;
