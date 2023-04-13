import React from "react";

const MemberSearchForm = () => {
  return (
    <>
      <form className="d-flex" method="get">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Members"
          aria-label="Search"
          name="search_member"
        />
        <button className="btn btn-outline-success" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default MemberSearchForm;
