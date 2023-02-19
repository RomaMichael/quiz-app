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

export default function AdminPostMenu({
  deletePost,
  post,
  redactPost,
  updateState,
  setUpdateState,
}) {
  const { user } = useUsers();

  const [updatedValue, setUpdatedValue] = useState("");

  const updateContent = (e) => {
    setUpdatedValue(e);
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
                </div>
                {user.role === "admin" ? (
                  <div
                    className="delete-post-admin"
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
                ) : null}
                <div
                  className="update-post-admin"
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
