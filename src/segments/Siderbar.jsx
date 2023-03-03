import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import SidebarOption from "../components/SidebarOption";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Siderbar() {
  return (
    <div id="sidebar">
      <h1 className="sidebar__logo">
        <Link to="#ContentPage"
        smooth
        >A</Link>
      </h1>
      <div className="sidebar__content">
        <a href="https://github.com/nartorcs50">
          <SidebarOption Icon={GitHub} />
        </a>
        <a href="https://www.instagram.com/">
          <SidebarOption Icon={Instagram} />
        </a>
        <a href="https://www.linkedin.com/in/alhassan-nartor-a3b7b4245/">
          <SidebarOption Icon={LinkedIn} />
        </a>
      </div>
    </div>
  );
}

export default Siderbar;
