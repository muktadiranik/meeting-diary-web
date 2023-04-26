import React from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const SearchMeeting = ({ meeting }) => {
  return (
    <div>
      <div key={meeting?.id} className="card m-2">
        <Link
          to={`/departments/${meeting?.department}/committees/${meeting?.committee}/meetings/${meeting?.id}`}
          className="card-header h4">
          {meeting?.title}
        </Link>
        <div className="card-body">
          <div className="card-text">{parse(meeting?.description)}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchMeeting;
