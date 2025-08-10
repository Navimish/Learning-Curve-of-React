import React from "react";
import { NavLink } from "react-router";

function Users() {
  const userdata = [
    { id: 1, name: "Anil" },
    { id: 2, name: "Navi" },
    { id: 3, name: "Sibbabl" },
    { id: 4, name: "Varsha" },
    { id: 5, name: "Harsh" },
  ];
  return (
    <>
      <div>
        <h1>Users Page</h1>

        {userdata.map((item) => {
          return (
            <div style={{ marginLeft: "20px" }}>
              <h3>
                <NavLink to={`/users/userid/${item.id}`}>{item.name}</NavLink>
              </h3>
            </div>
          );
        })}
      </div>

      <div>
        <h1>Users Page Dynamic Optional Segment</h1>

        {userdata.map((item) => {
          return (
            <div style={{ marginLeft: "20px" }}>
              <h3>
                <NavLink to={`/users/userid/${item.id}/${item.name}`}>
                  {item.name}
                </NavLink>
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;
