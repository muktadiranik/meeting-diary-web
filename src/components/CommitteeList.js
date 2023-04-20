import React from "react";
import { useSelector } from "react-redux";
import UpdateCommiteeModal from "./UpdateCommiteeModal";
import Committee from "./Committee";

const CommitteeList = () => {
  const { committees } = useSelector((state) => state.AllCommitteesReducer);

  return (
    <div className=" card my-1 border-0">
      <UpdateCommiteeModal />
      {committees?.map((committee) => (
        <Committee key={committee?.id} committee={committee} />
      ))}
    </div>
  );
};

export default CommitteeList;
