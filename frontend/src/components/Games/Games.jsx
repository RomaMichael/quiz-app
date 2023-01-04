import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Games.css";

export default function Games() {
  return (
    <div className="games">
      <div className="games-buttons">
        <Link to={"/memorygame"}>
          <button className="memory-game-button">Memory cards</button>
        </Link>
        <Link to={"#"}>
          <button className="differents-game-button">
            Which is different?
          </button>
        </Link>
      </div>
    </div>
  );
}
