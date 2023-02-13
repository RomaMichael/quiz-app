import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { useUsers } from "./UserProvider";

const notificationContext = createContext({});

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const { user } = useUsers();

  const myNotifications = notifications.filter(
    (note) => note.reciever._id === user._id
  );
  console.log(myNotifications);
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const res = await fetch("http://localHost:8006/notifications");
    const data = await res.json();
    setNotifications(data);
  };

  const addNotification = async (notification) => {
    console.log(notification);
    await fetch("http://localHost:8006/notifications/addNew", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notification),
    });
  };

  const updateNotification = async (notification) => {
    await fetch(
      `http://localHost:8006/notifications/update-notification/${notification._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notification),
      }
    );
  };

  // const deleteNotification = async (notification) => {
  //   await fetch(
  //     `http://localHost:8006/notifications/delete-notification/${notification._id}`,
  //     {
  //       method: "DELETE",
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  // };

  const value = {
    notifications,
    setNotifications,
    addNotification,
    fetchNotifications,
    myNotifications,
    updateNotification,
    // deleteNotification,
  };

  return (
    <notificationContext.Provider value={value}>
      {children}
    </notificationContext.Provider>
  );
}

export function useNotifications() {
  return useContext(notificationContext);
}
