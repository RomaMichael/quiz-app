import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLink } from "../../context/LinkProvider";
import "./Home.css";
export default function Home() {
  const { link, setLink } = useLink();

  useEffect(() => {
    setLink("/home");
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-title">
          <h1>Welcome to QuizApp</h1>
        </div>
        <div className="tests-choose">
          <div className="home-buttons">
            <Link to={"/testspage"}>
              <button>Try our tests</button>
            </Link>
            <Link to={"/games"}>
              <button>Play Games</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
