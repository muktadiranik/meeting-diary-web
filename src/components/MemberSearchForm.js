import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchMembersAction } from "../redux/actions/memberActions";

const MemberSearchForm = () => {
  const dispatch = useDispatch();

  const { departmentId } = useParams();

  const searchMember = (e) => {
    e.preventDefault();
    dispatch(
      getSearchMembersAction(departmentId, e.target.search_member.value)
    );
  };

  return (
    <>
      <form className="d-flex" method="get" onSubmit={searchMember}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Members"
          aria-label="Search"
          name="search_member"
          onChange={(e) => {
            dispatch(getSearchMembersAction(departmentId, e.target.value));
          }}
        />
        <button className="btn btn-outline-success" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default MemberSearchForm;
