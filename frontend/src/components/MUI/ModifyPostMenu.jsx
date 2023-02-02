import * as React from "react";

import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BsFillGearFill } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import { useUsers } from "../../context/UserProvider";
import UpdatePost from "./UpdatePost";

export default function ModifyPostMenu({ deletePost, post, redactPost }) {
  const { user } = useUsers();

  const hoverStyle = {
    backgroundColor: "yellow",
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
              <UpdatePost redactPost={redactPost} />
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
