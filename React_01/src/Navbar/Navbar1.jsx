import { Route, Routes, NavLink, Navigate, Outlet } from "react-router-dom";

import "./../CSS/Navbar_css.css";
import FirstRoutes from "./FirstRoutes";

export function Navbar() {
  return (
    <>
      <div className="navbar">
        <NavLink to={"/"}>
          <h2>Logo</h2>
        </NavLink>
        <NavLink className={({isActive})=>isActive?"custom-active":"link"} to={"/"}>Home Page</NavLink>
        <NavLink to={"/about"}>About Page</NavLink>
        <NavLink to={"/contact"}>Contact Page</NavLink>
        <NavLink to={"/mycollege"}>College</NavLink>
        <NavLink to={"/users"}> Users</NavLink>
        <NavLink to={"/users/list"}> List</NavLink>
      </div>
      <Outlet></Outlet>
    </>
  );
}
