import React from "react";
import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import {
  deleteCommitteeAction,
  getUpdateCommitteeAction,
} from "../redux/actions/committeeActions";
import { Link, useParams } from "react-router-dom";

const Committee = ({ committee }) => {
  const dispatch = useDispatch();

  const { departmentId } = useParams();

  const confirmDeleteCommittee = (departmentId, committeeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this committee?"
    );
    if (confirmDelete) {
      dispatch(deleteCommitteeAction(departmentId, committeeId));
    }
  };

  return (
    <div key={committee?.id} className="card my-1">
      <h3 className="card-header">{committee?.title}</h3>
      <div className="card-body">
        <div className="card-text">{parse(committee?.description)}</div>
      </div>
      <div className=" card-footer">
        <div className=" btn btn-group">
          <button className=" btn btn-outline-info" type="button">
            <Link
              type="button"
              to={`/departments/${departmentId}/committees/${committee?.id}/`}>
              <i className="fa-solid fa-eye"></i>
            </Link>
          </button>
          <button
            className=" btn btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#updateCommitteeModal"
            onClick={() => {
              dispatch(getUpdateCommitteeAction(departmentId, committee?.id));
            }}>
            <i className="fa-solid fa-pencil"></i>
          </button>
          <button
            className=" btn btn-outline-danger"
            type="button"
            onClick={() => {
              confirmDeleteCommittee(departmentId, committee?.id);
            }}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Committee;
