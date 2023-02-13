import React from "react";
import { Chart } from "react-google-charts";
import { useResultsTest } from "../../../context/ResultsTestProvider";

export function Charts({ statSubject, statLevel, chartType }) {
  const { testResults } = useResultsTest();

  const axs = [["Try", "Score"]];
  let stats = testResults;
  console.log(stats);
  const filterStats = () => {
    if (statSubject !== "all") {
      stats = testResults.filter((res) => res.testType === statSubject);
    }
    if (statLevel !== "all") {
      stats = testResults.filter((res) => res.testLevel === statLevel);
    }

    return stats;
  };

  stats = filterStats();

  let dataForChart = stats.map((res, i) => {
    return [i + 1, res.result];
  });
  dataForChart = [[0, 0], ...dataForChart];

  const data = [...axs, ...dataForChart];

  const options = {
    chart: {
      title: `Subject:${statSubject} - Level:${statLevel}`,
      subtitle: "",
    },
  };

  return (
    <div>
      <Chart
        chartType={chartType}
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
