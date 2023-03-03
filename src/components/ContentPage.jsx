import React from "react";
import ContentOptions from "./ContentOptions";
import Alhassan from "../assets/A__img.png";

function ContentPage() {
  return (
    <div id="ContentPage">
      <h1 className="content__title">Alhassan Nartor</h1>
      <p  className="content__p" >
        "I'm a <span className="black">Full Stack Software Engineer</span> with a strong passion for building
        web applications with great user experiences. Here's a bit more about
        me." 
      </p>
      <div className="tint">
        <img src={Alhassan} alt="" className="content__img" />
      </div>
      <ContentOptions />
     
    </div>
  );
}

export default ContentPage;
