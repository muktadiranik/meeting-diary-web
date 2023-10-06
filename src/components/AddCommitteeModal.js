import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { addCommitteeAction } from "../redux/actions/committeeActions";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddCommitteeModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [member, setMember] = useState([]);

  const dispatch = useDispatch();

  const { addedCommittee } = useSelector((state) => state.addCommitteeReducer);
  const { members } = useSelector((state) => state.AllMembersReducer);

  const closeRef = useRef();

  const { departmentId } = useParams();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addCommitteeAction(departmentId, title, description, member));
  };

  useEffect(() => {
    setTitle("");
    setDescription("");
    setMember([]);
    closeRef.current.click();
  }, [addedCommittee]);

  let options = [];
  for (let i = 0; i < members.length; i++) {
    const element = members[i];
    options.push({ value: element.id, label: element.full_name });
  }

  return (
    <div className="modal fade" id="addCommitteeModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <form onSubmit={onSubmitHandler}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Committee</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                <CKEditor
                  editor={ClassicEditor}
                  data={description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Select Members</label>
                <Select
                  defaultValue={member}
                  options={options}
                  isMulti
                  onChange={(e) => {
                    setMember(e.map((item) => item.value));
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
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

export default AddCommitteeModal;
