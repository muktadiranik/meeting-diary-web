import React, { useEffect } from "react";
import { getAllDepartmentsAction } from "../redux/actions/departmentActions";
import { useDispatch, useSelector } from "react-redux";
import Department from "../components/Department";
import DepartmentSearchForm from "../components/DepartmentSearchForm";

const Departments = () => {
  const dispatch = useDispatch();

  const { departments } = useSelector((state) => state.departmentReducer);

  useEffect(() => {
    dispatch(getAllDepartmentsAction());
  }, [dispatch]);

  return (
    <div className=" container mt-2">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            <h1>Your Departments</h1>
          </span>
          <DepartmentSearchForm />
        </div>
      </nav>
      <div>
        {departments?.map((department) => (
          <Department key={department?.id} department={department} />
        ))}
      </div>
    </div>
  );
};

export default Departments;
