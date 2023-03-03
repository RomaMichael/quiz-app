import React from "react";
import "./TheWall.css";
import WallContent from "./WallContent/WallContent";
import MainPageLeft from "./MainPageSide/MainPageLeft";
import MainPageRight from "./MainPageRight/MainPageRight";

export default function TheWall() {
  return (
    <div className="the-wall">
      <div className="the-wall-container">
        <div className="mainpage-left">
          <MainPageLeft />
        </div>
        <div className="mainpage-main">
          <WallContent />
        </div>
        <div className="mainpage-right">
          <MainPageRight />
        </div>
      </div>
    </div>
  );
}
