import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLink } from "../../context/LinkProvider";
import "./Games.css";

export default function Games() {
  const { link, setLink } = useLink();

  // useEffect(() => {
  //   setLink("/games");
  // }, []);
  // console.log(link);
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
