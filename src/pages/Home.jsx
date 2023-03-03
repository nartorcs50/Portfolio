import React from "react";
import HomeContent from "../segments/HomeContent";
import Siderbar from "../segments/Siderbar";

function Home() {
  return (
    <div className="home">
      <Siderbar />
      <HomeContent />
    </div>
  );
}

export default Home;
