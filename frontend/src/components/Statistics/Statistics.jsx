import React from "react";
import { useState } from "react";

import { useUsers } from "../../context/UserProvider";
import { Charts } from "./Charts/Charts";
import "./Statistics.css";
import { GiNetworkBars } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";

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
              <option value="geo">Geo</option>
              <option value="music">Music</option>
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
          {/* <button className="find-stats" onClick={filterStats}>
            Find
          </button> */}
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
