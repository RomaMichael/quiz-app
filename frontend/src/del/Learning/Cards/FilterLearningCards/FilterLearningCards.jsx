import React from "react";
import "./FilterLearningCards.css";

export default function FilterLearningCards({ setSearchName, setCategory }) {
  return (
    <div className="filterLearningCards">
      <div className="filterLearningCards-container">
        <h3>Filtration</h3>
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <label
          htmlFor=" "
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          Search by category
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="countries">Countries</option>
            <option value="sites">Sites</option>
            <option value="instruments">Instruments</option>
            <option value="musicians">Musicians</option>
          </select>
        </label>
      </div>
    </div>
  );
}
