import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const resultsTest = createContext();

export function ResultsTestProvider({ children }) {
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const res = await fetch("http://localhost:8006/resultstest");
    const data = await res.json();

    setTestResults(data);
  };

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
  };
  return <resultsTest.Provider value={value}>{children}</resultsTest.Provider>;
}

export function useResultsTest() {
  return useContext(resultsTest);
}
