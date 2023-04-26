import React from "react";

const SearchMember = ({ member }) => {
  return (
    <tr key={member.id}>
      <td>{member?.full_name}</td>
      <td>{member?.primary_phone}</td>
      <td>{member?.secondary_phone}</td>
      <td>{member?.email}</td>
      <td>{member?.address}</td>
      <td>{member?.designation}</td>
    </tr>
  );
};

export default SearchMember;
