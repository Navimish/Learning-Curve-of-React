import React from "react";
import { useParams, NavLink } from "react-router";

function UserList() {
  const params = useParams();

  return (
    <div>
      <h1> User ID : {params.id} </h1>
      <NavLink to={"/users"}>
        <h2>Back</h2>
      </NavLink>
    </div>
  );
}

export default UserList;
