import React, { useState, useRef, useEffect } from "react";
import { addMemberAction } from "../redux/actions/memberActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AddMemberModal = () => {
  const dispatch = useDispatch();

  const { addedMember } = useSelector((state) => state.addMemberReducer);

  const { departmentId } = useParams();

  const closeRef = useRef();

  const [fullName, setFullName] = useState("");
  const [primaryPhone, setPrimaryPhone] = useState("");
  const [secondaryPhone, setSecondaryPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("primary_phone", primaryPhone);
    formData.append("secondary_phone", secondaryPhone);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("designation", designation);
    dispatch(addMemberAction(departmentId, formData));
  };

  useEffect(() => {
    setFullName("");
    setPrimaryPhone("");
    setSecondaryPhone("");
    setEmail("");
    setAddress("");
    setDesignation("");
    closeRef.current.click();
  }, [addedMember]);

  return (
    <>
      <div
        className="modal fade"
        id="addMemberModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <form onSubmit={onSubmitHandler}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Member
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    name="full_name"
                    type="text"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Primary Phone</label>
                  <input
                    name="primary_phone"
                    type="text"
                    className="form-control"
                    value={primaryPhone}
                    onChange={(e) => {
                      setPrimaryPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Secondary Phone</label>
                  <input
                    name="secondary_phone"
                    type="text"
                    className="form-control"
                    value={secondaryPhone}
                    onChange={(e) => {
                      setSecondaryPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Designation</label>
                  <input
                    name="job_title"
                    type="text"
                    className="form-control"
                    value={designation}
                    onChange={(e) => {
                      setDesignation(e.target.value);
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
    </>
  );
};

export default AddMemberModal;
