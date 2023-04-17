import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const Department = ({ department }) => {
  return (
    <div className="card mt-2 mb-2">
      <h2 className="card-header">{department?.title}</h2>
      <div className="card-body">
        <div className="card-text">
          {department?.description && <>{parse(department?.description)}</>}
        </div>
      </div>
      <div>
        <div className=" mx-3 my-2 btn-group">
          <Link
            to={`/departments/${department?.id}/`}
            className=" btn btn-info">
            <i className="fa-solid fa-eye"></i>
          </Link>
        </div>
      </div>
      <div>
        {department?.committee_set?.map((committee) => (
          <div key={committee?.id} className="card mt-2 mb-2 mx-2">
            <h6 className="card-header">
              <Link
                to={`/departments/${department?.id}/committees/${committee?.id}/`}>
                {committee?.title}
              </Link>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
