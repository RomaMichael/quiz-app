import * as React from "react";
import Popover from "@mui/material/Popover";
import { useUsers } from "../../../context/UserProvider";
import { AiOutlineBell } from "react-icons/ai";
import Notification from "./Notification";
import { useNotifications } from "../../../context/NotificationsProvider";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = useUsers();
  const { myNotifications, updateNotification } = useNotifications();
  let newNots = myNotifications.filter((note) => note.newNotification === true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    newNots = myNotifications.map((note) => {
      if (note.newNotification) {
        const updatedNot = { ...note, newNotification: false };
        console.log(updatedNot);
        updateNotification(updatedNot);
        return updatedNot;
      }

      return note;
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log(newNots);
  return (
    <div style={{ display: "flex" }}>
      <AiOutlineBell style={{ fontSize: "35px" }} onClick={handleClick} />
      {newNots.length > 0 ? (
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
          {newNots.length}
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
          {newNots.length ? (
            <div>
              {" "}
              {newNots.map((notification, i) => (
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
