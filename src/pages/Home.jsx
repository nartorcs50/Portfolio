import React from "react";
import ContentPage from "../segments/ContentPage";
import Siderbar from "../segments/Siderbar";

function Home() {
  return (
    <div className="home">
      <Siderbar />
      <ContentPage />
    </div>
  );
}

export default Home;
