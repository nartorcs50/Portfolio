import React from "react";
import { Link } from "react-router-dom";
import Twit from "../assets/Netflix__img.png";
import Netf from "../assets/Twitter__img.png";
import Libr from "../assets/Library__img.png";

function Projects() {
  return (
    // <Link to="#projects">
    <section id="projects">
      <div className="projects__content">
        <h2>projects</h2>
        <div className="project__images">
          <div className="images__position">
            <img src={Twit} alt="" className="project__img" />
            <img src={Netf} alt="" className="project__img" />
            <img src={Libr} alt="" className="project__img" />
          </div>
        </div>
      </div>
    </section>
    // </Link>
  );
}

export default Projects;
