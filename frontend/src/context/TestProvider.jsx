import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import tests from "../quizapp/tests2.json";

const testContext = createContext();

export function TestProvider({ children }) {
  // useEffect(() => {
  //   try {
  //     const res = fetch();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const [test, setTest] = useState(null);
  const [testLevel, setTestLevel] = useState(null);

  const testType = tests.filter((item) => item.subject === test);

  const currentTest = testType.filter((item) => item.level === testLevel);

  const value = {
    test,
    tests,
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
