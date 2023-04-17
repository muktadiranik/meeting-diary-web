import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteMemberAction,
  getUpdateMemberAction,
} from "../redux/actions/memberActions";
import { useParams } from "react-router-dom";

const Member = ({ member }) => {
  const dispatch = useDispatch();

  const { departmentId } = useParams();

  const confirmDeleteMember = (departmentId, memberId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this member?"
    );
    if (confirmDelete) {
      dispatch(deleteMemberAction(departmentId, memberId));
    }
  };
  return (
    <tr key={member.id}>
      <td>{member?.full_name}</td>
      <td>{member?.primary_phone}</td>
      <td>{member?.secondary_phone}</td>
      <td>{member?.email}</td>
      <td>{member?.address}</td>
      <td>{member?.designation}</td>
      <td>
        <div className=" btn btn-group">
          <button
            className=" btn btn-outline-warning"
            data-bs-toggle="modal"
            data-bs-target="#updateMemberModal"
            onClick={() => {
              dispatch(getUpdateMemberAction(departmentId, member?.id));
            }}>
            <i className="fa-solid fa-pencil"></i>
          </button>
          <button
            className=" btn btn-outline-danger"
            onClick={() => {
              confirmDeleteMember(departmentId, member?.id);
            }}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Member;
