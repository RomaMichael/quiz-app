import React from "react";
import { Chart } from "react-google-charts";
import { useResultsTest } from "../../../context/ResultsTestProvider";
import { useUsers } from "../../../context/UserProvider";

export function Charts({ statSubject, statLevel, chartType }) {
  const { testResults } = useResultsTest();
  const { user } = useUsers();

  const myResults = testResults.filter((item) => item.userId === user._id);

  const axs = [["Try", "Score"]];
  let stats = myResults;
  console.log(stats);
  const filterStats = () => {
    if (statSubject !== "all") {
      myResults = myResults.filter((res) => res.testType === statSubject);
    }
    if (statLevel !== "all") {
      myResults = myResults.filter((res) => res.testLevel === statLevel);
    }

    return myResults;
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
