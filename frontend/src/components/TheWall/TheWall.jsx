import React, { useState } from "react";
import { useUsers } from "../../context/UserProvider";
import { useWallContent } from "../../context/WallProvider";
import "./TheWall.css";

import uuid4 from "uuid4";
import WallContent from "./WallContent/WallContent";

import { useEffect } from "react";
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
