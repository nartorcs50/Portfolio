import { Icon } from "@mui/material";
import React from "react";
import Contact from "../components/Contact";
import ContentPage from "../components/ContentPage";
import Exp from "../components/Exp";
import Projects from "../components/Projects";
// import HomePageIcon from "../components/HomePageIcon";
// import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';

function HomeContent() {
  return (
    <section id="homeContent">
      <div className="homeContent">
        {/* <HomePageIcon Icon={ArrowDropDownCircleRoundedIcon} /> */}
        <ContentPage />
        <Projects />
        <Exp />
        <Contact />
      </div>
    </section>
  );
}

export default HomeContent;
