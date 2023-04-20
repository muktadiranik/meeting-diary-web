import React from "react";
import { getSearchDepartmentsAction } from "../redux/actions/departmentActions";
import { useDispatch } from "react-redux";

const DepartmentSearchForm = () => {
  const dispatch = useDispatch();

  const searchDepartment = (e) => {
    e.preventDefault();
    dispatch(getSearchDepartmentsAction(e.target.search_department.value));
  };

  return (
    <>
      <div className="d-flex">
        <form className="d-flex" method="get" onSubmit={searchDepartment}>
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
