import * as React from "react";

import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BsFillGearFill } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import { useUsers } from "../../context/UserProvider";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

export default function AdminPostMenu({ deletePost, post, redactPost }) {
  const { user } = useUsers();
  const [updateState, setUpdateState] = useState(false);
  const [updatedValue, setUpdatedValue] = useState("");

  const [hoverDelete, setHoverDelete] = useState(false);
  const [hoverUpdate, setHoverUpdate] = useState(false);

  const hoverDel = () => {
    setHoverDelete(true);
  };
  const noHoverDel = () => {
    setHoverDelete(false);
  };

  const hoverUpd = () => {
    setHoverUpdate(true);
  };
  const noHoverUpd = () => {
    setHoverUpdate(false);
  };

  const updateContent = (e) => {
    setUpdatedValue(e);
  };

  const delStyle = {
    display: "flex",
    alignItems: "center",
    width: "258px",
    justifyContent: "space-between",
    cursor: "pointer",
    backgroundColor: hoverDelete ? "#414141" : "transparent",
  };
  const updStyle = {
    display: "flex",
    alignItems: "center",
    width: "258px",
    justifyContent: "space-between",
    cursor: "pointer",
    backgroundColor: hoverUpdate ? "#414141" : "transparent",
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <BsFillGearFill {...bindTrigger(popupState)} />

          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {updateState ? (
              <div
                style={{
                  backgroundColor: "#282828",
                  color: "white",
                  padding: "7px",
                }}
              >
                {" "}
                <div
                  className="update-post-title"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ padding: "10px" }}>Update</p>
                  <AiOutlineArrowLeft
                    onClick={() => setUpdateState(false)}
                    style={{ padding: "10px", fontSize: "25px" }}
                  />
                </div>
                <input
                  type="text"
                  style={{
                    width: "250px",
                    height: "30px",
                    paddingLeft: "10px",
                  }}
                  onChange={(e) => updateContent(e.target.value)}
                />
                <button
                  style={{
                    height: "30px",
                    color: "white",
                    backgroundColor: "blue",
                    border: "none",
                  }}
                  onClick={() => redactPost(updatedValue)}
                >
                  Send
                </button>
              </div>
            ) : (
              <div style={{ backgroundColor: "#282828", color: "white" }}>
                {" "}
                {/* <div
                  className="pin-post"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "258px",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <p>Pin post to the top</p>
                  <BsPinAngleFill style={{ fontSize: "20px", color: "blue" }} />
                </div> */}
                {user.role === "admin" ? (
                  <div
                    className="delete-post-admin"
                    style={delStyle}
                    onMouseEnter={hoverDel}
                    onMouseLeave={noHoverDel}
                    onClick={() => deletePost(post)}
                  >
                    <p>Delete post</p>
                    <AiFillDelete style={{ fontSize: "20px", color: "red" }} />
                  </div>
                ) : null}
                <div
                  className="update-post-admin"
                  style={updStyle}
                  onMouseEnter={hoverUpd}
                  onMouseLeave={noHoverUpd}
                  onClick={() => setUpdateState(true)}
                >
                  <p>Update post</p>
                  <BsFillPenFill style={{ fontSize: "20px", color: "green" }} />
                </div>
              </div>
            )}
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
