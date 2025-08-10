import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import "./../CSS/Navbar_css.css";
import { MyCollege } from "./College";
import { SectionA } from "./SectionA";
import { SectionB } from "./sectionB";
import { SectionC } from "./SectionC";
import { Navbar } from "./Navbar1";
import Users from "./Users";
import UserList from "./UserList";

function FirstRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<Navbar></Navbar>}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/users/list?" element={<Users></Users>}></Route>
          <Route path="/users/userid/:id/:name?" element={<UserList />}></Route>
        </Route>
        <Route path="/mycollege" element={<MyCollege />}>
          <Route index element={<SectionA></SectionA>}></Route>
          <Route path="sectionB" element={<SectionB></SectionB>}></Route>
          <Route path="sectionC" element={<SectionC></SectionC>}></Route>
        </Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </div>
  );
}

export default FirstRoutes;
