import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TestProvider } from "./context/TestProvider";

import { MemoryProvider } from "./context/MemoryCardProvider";
import { UserProvider } from "./context/UserProvider";
import { WallProvider } from "./context/WallProvider";
import { TimeAndDAteProvider } from "./context/TimeAndDateProvider";
import { NotificationProvider } from "./context/NotificationsProvider";
import { ResultsTestProvider } from "./context/ResultsTestProvider";
import { GamesResultsProvider } from "./context/GamesResultsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TimeAndDAteProvider>
      <TestProvider>
        <MemoryProvider>
          <UserProvider>
            <ResultsTestProvider>
              <GamesResultsProvider>
                <NotificationProvider>
                  <WallProvider>
                    <App />
                  </WallProvider>
                </NotificationProvider>
              </GamesResultsProvider>
            </ResultsTestProvider>
          </UserProvider>
        </MemoryProvider>
      </TestProvider>
    </TimeAndDAteProvider>
  </BrowserRouter>
);
