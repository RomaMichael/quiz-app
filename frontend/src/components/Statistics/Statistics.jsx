import React from "react";
import { useState } from "react";

import { useUsers } from "../../context/UserProvider";
import { Charts } from "./Charts/Charts";
import "./Statistics.css";
import { GiNetworkBars } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function Statistics() {
  const [statSubject, setStatSubject] = useState("all");
  const [statLevel, setStatLevel] = useState("all");
  const [chartType, setChartType] = useState("Line");

  return (
    <div className="statistics">
      <div className="statistics-container">
        <div className="filters">
          <h3>Choose level and subject</h3>
          <label
            htmlFor="
            "
          >
            <p>Subject</p>
            <select
              name=""
              id=""
              onChange={(e) => setStatSubject(e.target.value)}
            >
              <option value="all">All</option>
              <option value="math">Math</option>
              <option value="colors and shapes">Colors and shapes</option>
              <option value="animals">Animals</option>
            </select>
          </label>
          <label
            htmlFor="
      "
          >
            {" "}
            <p>Level</p>
            <select
              name=""
              id=""
              onChange={(e) => setStatLevel(e.target.value)}
            >
              <option value="all">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <Link to="/testsPage">
            <button
              style={{
                position: "relative",
                right: "25px",
                top: "20px",
                height: "40px",
                borderRadius: "10px",
                border: "none",
                color: "white",
                backgroundColor: "green",
              }}
            >
              Go make some more tests
            </button>
          </Link>
        </div>

        <div className="statistics-information">
          {" "}
          <div className="graph-buttons">
            <button onClick={() => setChartType("Bar")} className="button-bar">
              <GiNetworkBars />
            </button>
            <button
              onClick={() => setChartType("Line")}
              className="button-line"
            >
              <SlGraph />
            </button>
          </div>
          <Charts
            chartType={chartType}
            statSubject={statSubject}
            statLevel={statLevel}
          />
        </div>
      </div>
    </div>
  );
}
