import React from "react";

const CommitteeSearchForm = () => {
  return (
    <>
      <form className="d-flex" method="get">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Committees"
          aria-label="Search"
          name="search_committee"
        />
        <button className="btn btn-outline-success" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default CommitteeSearchForm;
