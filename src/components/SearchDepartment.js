import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const SearchDepartment = ({ department }) => {
  return (
    <div>
      <div key={department?.id} className="card m-2">
        <Link to={`/departments/${department?.id}/`} className="card-header h4">
          {department?.title}
        </Link>
        <div className="card-body">
          <div className="card-text">{parse(department?.description)}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchDepartment;
