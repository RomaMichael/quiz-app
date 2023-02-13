import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useUsers } from "../../../context/UserProvider";
import { useResultsTest } from "../../../context/ResultsTestProvider";

export default function TestResults({
  messageEnd,
  currentTest,
  score,
  smiley,
}) {
  const { updateTestResults } = useResultsTest();
  const { fetchResults } = useResultsTest();

  const { user } = useUsers();

  const navigate = useNavigate();

  useEffect(() => {
    let percent = (score / currentTest.length) * 100;
    let newResult = {
      testType: currentTest[0].subject,
      testLevel: currentTest[0].level,
      result: score,
      resultPercent: percent,
      userId: user._id,
    };

    // setTestResult(newResult);
    updateTestResults(newResult);
    fetchResults();
  }, []);

  console.log("test ended");
  const toStartTest = () => {
    navigate("/testspage", { new: true });
  };

  return (
    <div>
      {" "}
      <div
        className="back-to-tests"
        style={{ display: "flex", justifyContent: "flex-start", width: "80vw" }}
      >
        <BsFillArrowLeftCircleFill
          style={{ fontSize: "30px" }}
          onClick={toStartTest}
        />
      </div>
      <div
        className="end-test"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="end-test-title">
          <h1 style={{ fontSize: "45px", fontFamily: "cursive" }}>The end!</h1>
          <h2 style={{ fontFamily: "cursive" }}>{messageEnd}</h2>
          <img
            src={smiley.url}
            alt="pic"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <h3 style={{ fontFamily: "cursive" }}>
          You answered correct {score}/{currentTest.length} times
        </h3>
      </div>
    </div>
  );
}
