import React from "react";
import { useUsers } from "../../../context/UserProvider";

export default function Notification({ notification }) {
  const { updateNotifications, user, updateUser } = useUsers();
  const seeNotification = () => {
    const notificationUpdate = { ...notification, seen: true };
    console.log(notificationUpdate);

    updateNotifications();
    updateUser((prev) => ({
      ...prev,
      notifications: user.notifications.map((note) => (note.new = false)),
    }));
  };

  return (
    <div
      style={{
        height: "100px",
        width: "300px",
        padding: "2px",
        display: "flex",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        backgroundColor: notification.seen ? "white" : "#50C878",
      }}
      onClick={seeNotification}
    >
      <img
        src={notification.senderAvatar}
        alt={notification.sederName}
        style={{ width: "60px", height: "60px", borderRadius: "50px" }}
      />
      <p>
        {notification.messageToNotification}: "{notification.content}"
      </p>
    </div>
  );
}
