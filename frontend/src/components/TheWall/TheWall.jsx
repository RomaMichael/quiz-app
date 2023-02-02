import React, { useState } from "react";
import { useUsers } from "../../context/UserProvider";
import { useWallContent } from "../../context/WallProvider";
import "./TheWall.css";

import uuid4 from "uuid4";
import WallContent from "./WallContent/WallContent";

import { useEffect } from "react";
import MainPageSide from "./MainPageSide/MainPageSide";
import { useTimeAndDate } from "../../context/TimeAndDateProvider";
import MainPageRight from "./MainPageRight/MainPageRight";

export default function TheWall() {
  return (
    <div className="the-wall">
      <div className="the-wall-container">
        <div className="mainpage-side">
          <MainPageSide />
        </div>
        <div className="mainpage-main">
          <div className="wall-content">
            <WallContent />
          </div>
        </div>
        <div className="mainPage-Right">
          <MainPageRight />
        </div>
      </div>
    </div>
  );
}
