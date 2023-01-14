import React, { useState } from "react";
import { useEffect } from "react";

import { useUsers } from "../../../context/UserProvider";

export default function TestResults({
  messageEnd,
  currentTest,
  score,
  smiley,
}) {
  const [testResult, setTestResult] = useState({});

  const { updateUser, setUser, user } = useUsers();
  console.log(user);
  useEffect(() => {
    let percent = (score / currentTest.length) * 100;
    let newResult = {
      testType: currentTest[0].subject,
      testLevel: currentTest[0].level,
      result: score,
      resultPercent: percent,
    };
    const updaedUser = { ...user, results: [...user.results, newResult] };
    console.log(updaedUser);
    setTestResult(newResult);
    setUser(updaedUser);
  }, []);
  updateUser(user);
  console.log(testResult);
  return (
    <div
      className="end-test"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {" "}
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
  );
}
