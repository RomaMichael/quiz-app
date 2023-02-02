import React, { createContext, useContext } from "react";
import moment from "moment";

const TimeAndDateContext = createContext();

export function TimeAndDAteProvider({ children }) {
  const Data = new Date();
  const minutes =
    Data.getMinutes() > 9 ? Data.getMinutes() : `0${Data.getMinutes()}`;
  const hours = Data.getHours() > 9 ? Data.getHours() : `0${Data.getHours()}`;
  const currentTime = `${hours}:${minutes}`;
  const currentDate = moment().format("MMM Do YY");

  const value = { currentDate, currentTime };

  return (
    <TimeAndDateContext.Provider value={value}>
      {children}
    </TimeAndDateContext.Provider>
  );
}

export function useTimeAndDate() {
  return useContext(TimeAndDateContext);
}
