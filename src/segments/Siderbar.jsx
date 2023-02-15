import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import SidebarOption from "../components/SidebarOption";
import React from "react";

function Siderbar() {
  return (
    <div id="sidebar">
      <h1  className="sidebar__logo" >A</h1>
      <div className="sidebar__content">
        <SidebarOption Icon={GitHub} />
        <SidebarOption Icon={Instagram} />
        <SidebarOption Icon={LinkedIn} />
      </div>
    </div>
  );
}

export default Siderbar;
