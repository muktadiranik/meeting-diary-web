import React, { useEffect } from "react";
import { getDepartmentDetailsAction } from "../redux/actions/departmentActions";
import { getAllMembersAction } from "../redux/actions/memberActions";
import { getAllCommitteesAction } from "../redux/actions/committeeActions";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import AddCommitteeModal from "../components/AddCommitteeModal";
import AddMemberModal from "../components/AddMemberModal";
import MemberList from "../components/MemberList";
import CommitteeSearchForm from "../components/CommitteeSearchForm";
import MemberSearchForm from "../components/MemberSearchForm";
import CommitteeList from "../components/CommitteeList";

const DepartmentDetails = () => {
  const { departmentId } = useParams();

  const dispatch = useDispatch();

  const { department } = useSelector((state) => state.departmentDetailsReducer);
  const { addedCommittee } = useSelector((state) => state.addCommitteeReducer);
  const { updatedCommittee } = useSelector(
    (state) => state.updateCommitteeReducer
  );
  const { addedMember } = useSelector((state) => state.addMemberReducer);
  const { updatedMember } = useSelector((state) => state.updateMemberReducer);
  const { deleteCommitteeSuccess } = useSelector(
    (state) => state.deleteCommitteeReducer
  );
  const { deleteMemberSuccess } = useSelector(
    (state) => state.deleteMemberReducer
  );

  useEffect(() => {
    dispatch(getDepartmentDetailsAction(departmentId));
  }, [dispatch, departmentId]);

  useEffect(() => {
    dispatch(getAllMembersAction(departmentId));
  }, [dispatch, departmentId, addedMember, deleteMemberSuccess, updatedMember]);

  useEffect(() => {
    dispatch(getAllCommitteesAction(departmentId));
  }, [
    dispatch,
    departmentId,
    addedCommittee,
    deleteCommitteeSuccess,
    updatedCommittee,
  ]);

  return (
    <>
      <div className=" container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>{department?.title}</h1>
            <div>
              {department?.description && parse(department?.description)}
            </div>
          </div>
        </div>
        <AddCommitteeModal />
        <AddMemberModal />
        <div className="row">
          <div className="col-md-4">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                  <h4>Your Committees</h4>
                </span>
                <div className="d-flex">
                  <CommitteeSearchForm />
                  <button
                    className="btn btn-outline-success ms-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#addCommitteeModal">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </nav>
            <CommitteeList />
          </div>
          <div className="col-md-8">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                  <h4>Your Members</h4>
                </span>
                <div className="d-flex">
                  <MemberSearchForm />
                  <button
                    className="btn btn-outline-success ms-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#addMemberModal">
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </nav>
            <MemberList />
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentDetails;
