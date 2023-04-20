import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchCommitteesAction } from "../redux/actions/committeeActions";

const CommitteeSearchForm = () => {
  const dispatch = useDispatch();

  const { departmentId } = useParams();

  const searchCommittee = (e) => {
    e.preventDefault();
    dispatch(
      getSearchCommitteesAction(departmentId, e.target.search_committee.value)
    );
  };

  return (
    <>
      <form className="d-flex" method="get" onSubmit={searchCommittee}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Committees"
          aria-label="Search"
          name="search_committee"
          onChange={(e) => {
            dispatch(getSearchCommitteesAction(departmentId, e.target.value));
          }}
        />
        <button className="btn btn-outline-success" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default CommitteeSearchForm;
