import * as React from "react";

import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
export default function UserPostMenu({ deletePost, post, redactPost }) {
  const [updatedValue, setUpdatedValue] = useState("");
  const [updateState, setUpdateState] = useState(false);
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

  const updateContent = (e) => {
    setUpdatedValue(e);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <BiDotsVerticalRounded
            {...bindTrigger(popupState)}
            style={{ fontSize: "25px" }}
          />

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
              <div style={{ backgroundColor: "#282828", color: "white" }}>
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
                <div
                  className="delete-post-user"
                  style={delStyle}
                  onMouseEnter={hoverDel}
                  onMouseLeave={noHoverDel}
                  onClick={() => deletePost(post)}
                >
                  <p>Delete post</p>
                  <AiFillDelete style={{ fontSize: "20px", color: "red" }} />
                </div>
                <div
                  className="update-post-user"
                  style={updStyle}
                  onClick={() => setUpdateState(true)}
                  onMouseEnter={hoverUpd}
                  onMouseLeave={noHoverUpd}
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
