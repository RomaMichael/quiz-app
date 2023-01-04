import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const testContext = createContext();

export function TestProvider({ children }) {
  const [allTests, setAllTests] = useState([]);
  const [test, setTest] = useState([]);
  const [testLevel, setTestLevel] = useState(null);

  useEffect(() => {
    fetchTest();
  }, []);

  const fetchTest = async () => {
    try {
      const res = await fetch("http://localhost:8006/tests");
      const data = await res.json();
      setAllTests(data);
    } catch (error) {
      console.log(error);
    }
  };

  const testType = allTests.filter((item) => item.subject === test);

  const currentTest = testType.filter((item) => item.level === testLevel);

  const value = {
    test,
    setTest,
    testLevel,
    setTestLevel,
    currentTest,
  };

  return <testContext.Provider value={value}>{children}</testContext.Provider>;
}

export function useTest() {
  return useContext(testContext);
}
