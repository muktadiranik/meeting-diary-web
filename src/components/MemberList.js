import React from "react";
import { useSelector } from "react-redux";
import UpdateMemberModal from "./UpdateMemberModal";
import Member from "./Member";

const MemberList = () => {
  const { members } = useSelector((state) => state.AllMembersReducer);

  return (
    <div>
      <UpdateMemberModal />
      <table className=" table table-striped">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Primary Phone</th>
            <th>Secondary Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members?.map((member) => (
            <Member member={member} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
