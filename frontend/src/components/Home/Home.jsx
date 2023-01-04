import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
export default function Home() {
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
