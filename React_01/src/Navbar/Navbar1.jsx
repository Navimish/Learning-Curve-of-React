import { Route, Routes, Link, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import "./../CSS/Navbar_css.css";
import { MyCollege } from "./College";
import { SectionA } from "./SectionA";
import { SectionB } from "./sectionB";
import { SectionC } from "./SectionC";

export function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <h2>Logo</h2>
        </Link>
        <Link to={"/"}>Home Page</Link>
        <Link to={"/about"}>About Page</Link>
        <Link to={"/contact"}>Contact Page</Link>
        <Link to={"/mycollege"}>College</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/mycollege" element={<MyCollege />}>
          <Route path="sectionA" element={<SectionA></SectionA>}></Route>
          <Route path="sectionB" element={<SectionB></SectionB>}></Route>
          <Route path="sectionC" element={<SectionC></SectionC>}></Route>
        </Route>
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </>
  );
}
