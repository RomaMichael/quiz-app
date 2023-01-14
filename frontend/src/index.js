import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TestProvider } from "./context/TestProvider";
import { LearningProvider } from "./context/LearningProvider";
import { MemoryProvider } from "./context/MemoryCardProvider";
import { UserProvider } from "./context/UserProvider";
import { WallProvider } from "./context/WallProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TestProvider>
      <LearningProvider>
        <MemoryProvider>
          <UserProvider>
            <WallProvider>
              <App />
            </WallProvider>
          </UserProvider>
        </MemoryProvider>
      </LearningProvider>
    </TestProvider>
  </BrowserRouter>
);
