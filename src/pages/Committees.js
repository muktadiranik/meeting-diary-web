import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommitteeDetailsAction } from "../redux/actions/committeeActions";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import MeetingList from "../components/MeetingList";

const Committees = () => {
  const dispatch = useDispatch();

  const { committee } = useSelector((state) => state.committeeReducer);

  const { departmentId, committeeId } = useParams();

  useEffect(() => {
    dispatch(getCommitteeDetailsAction(departmentId, committeeId));
  }, [dispatch, departmentId, committeeId]);

  return (
    <div className=" container-fluid mt-2">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            <h1>{committee?.title}</h1>
          </span>
        </div>
      </nav>
      <div className="my-2">
        {committee?.description && <div>{parse(committee?.description)}</div>}
      </div>
      <div className=" my-2">
        <MeetingList />
      </div>
    </div>
  );
};

export default Committees;
