import React from "react";
import { useSelector } from "react-redux";
import SearchDepartment from "../components/SearchDepartment";
import SearchCommittee from "../components/SearchCommittee";
import SearchMember from "../components/SearchMember";
import SearchMeeting from "../components/SearchMeeting";

const Search = () => {
  const { searchResult } = useSelector((state) => state.searchResultReducer);

  return (
    <div className="container-fluid">
      <div className=" m-2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h2>Departments</h2>
          </div>
        </nav>
        <div>
          {searchResult?.departments?.map((department) => (
            <SearchDepartment department={department} />
          ))}
        </div>
      </div>
      <div className=" m-2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h2>Committees</h2>
          </div>
        </nav>
        <div>
          {searchResult?.committees?.map((committee) => (
            <SearchCommittee committee={committee} />
          ))}
        </div>
      </div>
      <div className=" m-2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h2>Members</h2>
          </div>
        </nav>
        <div>
          <table className=" table table-striped">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Primary Phone</th>
                <th>Secondary Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {searchResult?.members?.map((member) => (
                <SearchMember member={member} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className=" m-2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h2>Meetings</h2>
          </div>
        </nav>
        <div>
          {searchResult?.meetings?.map((meeting) => (
            <SearchMeeting meeting={meeting} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
