import React, { createContext, useCallback, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useUsers } from "./UserProvider";

const resultsTest = createContext();

export function ResultsTestProvider({ children }) {
  const [testResults, setTestResults] = useState([]);

  const { user, updateUser, setAllOfUsers } = useUsers();

  const calculateScore = (testResults) => {
    const totalScore = testResults.reduce((start, item) => {
      let totalSum = 0;

      switch (item.testLevel) {
        case "easy":
          totalSum += item.result;
          break;
        case "medium":
          totalSum += item.result * 2;
          break;
        case "hard":
          totalSum += item.result * 4;
          break;
        default:
          throw new Error("Encountered unknown test level");
      }

      return start + totalSum / testResults.length;
    }, 0);
    const newScore = Number(totalScore.toFixed(2));
    updateUser({ ...user, testsScore: newScore });
    setAllOfUsers((users) => {
      const updatedUsers = [...users];
      const index = updatedUsers.findIndex((u) => u._id === user._id);
      updatedUsers[index].testsScore = newScore;
      return updatedUsers;
    });
  };

  const fetchResults = useCallback(async () => {
    const res = await fetch("http://localhost:8006/resultstest");
    const data = await res.json();

    const thisUserResults = data.filter((item) => item.userId === user._id);

    setTestResults(thisUserResults);
    calculateScore(thisUserResults);
  }, [user._id]);

  useEffect(() => {
    if (user.isLoggedIn) {
      fetchResults();
    }
  }, [user.isLoggedIn]);

  const updateTestResults = async (res) => {
    await fetch(`http://localHost:8006/resultstest/add-result`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(res),
    });
  };

  const value = {
    testResults,
    updateTestResults,
    fetchResults,
  };
  return <resultsTest.Provider value={value}>{children}</resultsTest.Provider>;
}

export function useResultsTest() {
  return useContext(resultsTest);
}
