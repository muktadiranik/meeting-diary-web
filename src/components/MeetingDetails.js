import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMeetingDetailsAction } from "../redux/actions/meetingActions";
import { getAllMembersAction } from "../redux/actions/memberActions";
import parse from "html-react-parser";
import dateFormat from "dateformat";

const MeetingDetails = () => {
  const { departmentId, committeeId, meetingId } = useParams();

  const dispatch = useDispatch();

  const { meeting } = useSelector((state) => state.meetingDetailsReducer);
  const { members } = useSelector((state) => state.AllMembersReducer);

  useEffect(() => {
    dispatch(getMeetingDetailsAction(departmentId, committeeId, meetingId));
  }, [dispatch, departmentId, committeeId, meetingId]);

  useEffect(() => {
    if (members.length === 0) dispatch(getAllMembersAction(departmentId));
  }, [dispatch, departmentId, members]);

  return (
    <div className="container-fluid" key={meeting?.id}>
      <div className="row pt-2">
        <div className="col-md-10">
          <h1>{meeting?.title}</h1>
          <h3 className="text-decoration-underline">Description</h3>
          {meeting?.description && <div>{parse(meeting?.description)}</div>}
          <br />
          <h3 className="text-decoration-underline">Content</h3>
          {meeting?.content && <div>{parse(meeting?.content)}</div>}
        </div>
        <div className="col-md-2">
          <h3 className="text-decoration-underline">Meeting Time</h3>
          <p>
            {dateFormat(
              meeting?.meeting_time,
              "dddd, mmmm dS, yyyy, h:MM:ss TT"
            )}
          </p>
          <br />
          <h3 className="text-decoration-underline">Invited Member</h3>
          <div>
            <ul>
              {meeting?.invited_member?.map((member) => {
                return (
                  <li key={member.id}>
                    {members.find((m) => m.id === member)?.full_name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
