import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const SearchCommittee = ({ committee }) => {
  return (
    <div>
      <div>
        <div key={committee?.id} className="card m-2">
          <Link
            to={`/departments/${committee?.department}/committees/${committee?.id}/`}
            className="card-header h4">
            {committee?.title}
          </Link>
          <div className="card-body">
            <div className="card-text">{parse(committee?.description)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCommittee;
