import * as React from "react";
import Popover from "@mui/material/Popover";

import { AiOutlineBell } from "react-icons/ai";
import Notification from "./Notification";
import { useNotifications } from "../../../context/NotificationsProvider";

export default function Notifications() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {
    myNotifications,
    setNotifications,

    updateNotification,
  } = useNotifications();

  const newNotes = myNotifications.filter(
    (note) => note.newNotification === true
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

    setNotifications((notifications) => {
      return notifications.map((notification) => ({
        ...notification,
        newNotification: false,
      }));
    });
    const newNot = myNotifications.map((notification) => ({
      ...notification,
      newNotification: false,
    }));
    console.log(newNot);
    updateNotification(newNot[0]);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ display: "flex" }}>
      <AiOutlineBell style={{ fontSize: "35px" }} onClick={handleClick} />
      {newNotes.length > 0 ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50px",
            backgroundColor: "red",
            color: "white",
            position: "relative",
            right: "17px",
          }}
        >
          {newNotes.length}
        </div>
      ) : null}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div style={{ width: "300px", minHeight: "100px" }}>
          {myNotifications.length ? (
            <div>
              {" "}
              {myNotifications.map((notification, i) => (
                <Notification notification={notification} key={i} />
              ))}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              <p>There is no notifications for you</p>
            </div>
          )}
        </div>
      </Popover>
    </div>
  );
}
