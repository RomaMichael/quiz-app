import * as React from "react";

import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function UserPostMenu({
  deletePost,
  post,
  redactPost,
  updateState,
  setUpdateState,
}) {
  const [updatedValue, setUpdatedValue] = useState("");

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
              <div>
                {" "}
                <div
                  className="update-post-title"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ padding: "10px" }}>Post update</p>
                  <AiOutlineArrowLeft onClick={() => setUpdateState(false)} />
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
              <div>
                {" "}
                <div
                  className="delete-post-user"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "258px",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <p>Delete post</p>
                  <AiFillDelete
                    style={{ fontSize: "20px", color: "red" }}
                    onClick={() => deletePost(post)}
                  />
                </div>
                <div
                  className="update-post-user"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "258px",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <p>Update post</p>
                  <BsFillPenFill
                    style={{ fontSize: "20px", color: "green" }}
                    onClick={() => setUpdateState(true)}
                  />
                </div>
              </div>
            )}
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
