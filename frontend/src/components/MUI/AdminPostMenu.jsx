import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { BsFillGearFill } from "react-icons/bs";
import { BsPinAngleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";

export default function AdminPostMenu({ delPost }) {
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
              }}
            >
              <p>Pin post to the top</p>
              <BsPinAngleFill style={{ fontSize: "20px", color: "blue" }} />
            </div>
            <div
              className="delete-post-admin"
              style={{
                display: "flex",
                alignItems: "center",
                width: "258px",
                justifyContent: "space-between",
              }}
            >
              <p>Delete post</p>
              <AiFillDelete
                style={{ fontSize: "20px", color: "red" }}
                onClick={delPost}
              />
            </div>
            <div
              className="update-post-admin"
              style={{
                display: "flex",
                alignItems: "center",
                width: "258px",
                justifyContent: "space-between",
              }}
            >
              <p>Update post</p>
              <BsFillPenFill
                style={{ fontSize: "20px", color: "green" }}
                onClick={delPost}
              />
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
