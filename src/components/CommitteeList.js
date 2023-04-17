import React from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import {
  deleteCommitteeAction,
  getUpdateCommitteeAction,
} from "../redux/actions/committeeActions";
import { Link, useParams } from "react-router-dom";
import UpdateCommiteeModal from "./UpdateCommiteeModal";
import Committee from "./Committee";

const CommitteeList = () => {
  const { committees } = useSelector((state) => state.AllCommitteesReducer);

  return (
    <div className=" card my-1 border-0">
      <UpdateCommiteeModal />
      {committees?.map((committee) => (
        <Committee committee={committee} />
      ))}
    </div>
  );
};

export default CommitteeList;
