import React from "react";

import { Link } from "react-router-dom";
import { useUsers } from "../../context/UserProvider";
import LoginButton from "../buttons/LoginButton";
import "./Games.css";

export default function Games() {
  const { user } = useUsers();
  return (
    <div className="games">
      {user.isLoggedIn ? (
        <div className="games-buttons">
          <Link to={"/memorygame"}>
            <button className="memory-game-button">Memory cards</button>
          </Link>
        </div>
      ) : (
        <div style={{ height: "500px", display: "flex", alignItems: "center" }}>
          {" "}
          <LoginButton />
        </div>
      )}
    </div>
  );
}
