import React from "react";

const DepartmentSearchForm = () => {
  return (
    <>
      <div className="d-flex">
        <form className="d-flex" method="get">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Departments"
            aria-label="Search"
            name="search_department"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default DepartmentSearchForm;
