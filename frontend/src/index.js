import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LinkProvider } from "./context/LinkProvider";
import { TestProvider } from "./context/TestProvider";
import { LearningProvider } from "./context/LearningProvider";
import { MemoryProvider } from "./context/MemoryCardProvider";
import { ShuffleProvider } from "./context/ShufflingProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LinkProvider>
      <TestProvider>
        <LearningProvider>
          <MemoryProvider>
            <App />
          </MemoryProvider>
        </LearningProvider>
      </TestProvider>
    </LinkProvider>
  </BrowserRouter>
);
