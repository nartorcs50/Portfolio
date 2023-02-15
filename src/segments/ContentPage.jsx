import React from "react";
import ContentOptions from "../components/ContentOptions";
import Email from "../components/ui/Email";
import Alhassan from "../assets/A__img.png";
import { Link } from "react-scroll";
import Projects from "../components/Projects";
import Exp from "../components/Exp";
import Contact from "../components/Contact";

function ContentPage() {
  return (
    <div id="ContentPage">
      <h1 className="content__title">Alhassan Nartor</h1>
      <p  className="content__p" >
        "I'm a Full Stack Software Engineer with a strong passion for building
        web applications with great user experiences. Here's a bit more about
        me." 
      </p>
      <div className="tint">
        <img src={Alhassan} alt="" className="content__img" />
      </div>
      <ContentOptions />

      <Projects />
      <Exp />
      <Contact />
      {/* <Email /> */}
    </div>
  );
}

export default ContentPage;
