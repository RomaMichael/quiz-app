import * as React from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import UpdatePost from "./UpdatePost";

export default function UserPostMenu({ deletePost, post, redactPost }) {
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
              <UpdatePost redactPost={redactPost} />
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
