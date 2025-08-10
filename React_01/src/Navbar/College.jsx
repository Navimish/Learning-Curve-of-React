import { NavLink, Outlet } from "react-router";
export function MyCollege() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="text-4xl font-bold text-gray-900">College Page</h1>
      <NavLink to={""}>
        <h2>Section A</h2>
      </NavLink>
      <NavLink to={"sectionB"}>
        <h2>Section B</h2>
      </NavLink>
      <NavLink to={"sectionC"}>
        <h2>Section C</h2>
      </NavLink>
      <NavLink to={"/"}>
        <h2>Back to Home</h2>
      </NavLink>
      <Outlet></Outlet>
    </div>
  );
}
