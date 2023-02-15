import React, { useState } from "react";
import { Link } from "react-scroll";


function ContentOptions() {

  // const [click, setClick] = useState(false)
  // const handleClick = () => setClick(!click)

  // const closeMenu = () => setClick(false)

  return (
    <div className="contentOptions">
      <div className="contentSelected">
          <h2>
        <Link to="#projects"  spy={true} smooth={true} offset={50} duration={500} onClick>
            Projects
        </Link>
            </h2>
        <Link to="/exp" spy={true} smooth={true} offset={50} duration={500}>
          <h2>Experience</h2>
        </Link>
        <Link to="/contact" spy={true} smooth={true} offset={50} duration={500}>
          <h2>Contact</h2>
        </Link>
      </div>
    </div>
  );
}

export default ContentOptions;
