import React from "react";
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
            <div className="image__container">
              <img src={Twit} alt="" className="project__img" />
              <div className="image__overlay">
                <h2>NETFLIX</h2>
              </div>
            </div>
            <div className="image__container">
              <img src={Netf} alt="" className="project__img" />
              <div className="image__overlay">
                <h2>TWITTER</h2>
              </div>
            </div>
            <div className="image__container">
              <img src={Libr} alt="" className="project__img" />
              <div className="image__overlay">
                <h2>LIBRARY</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </Link>
  );
}

export default Projects;
