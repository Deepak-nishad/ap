import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner.jsx";

import Trending from "./trending/trending";

const home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default home;
