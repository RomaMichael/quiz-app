import * as React from "react";
import Popover from "@mui/material/Popover";

import { BsFillPenFill } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
export default function UpdatePost({ redactPost }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [updatedValue, setUpdatedValue] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const updateContent = (e) => {
    setUpdatedValue(e);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <BsFillPenFill
        style={{ fontSize: "20px", color: "green" }}
        onClick={handleClick}
      />
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
        <div
          className="update-post-title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ padding: "10px" }}>Post update</p>
          <AiOutlineArrowLeft />
        </div>

        <input
          type="text"
          style={{ width: "250px", height: "30px", paddingLeft: "10px" }}
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
      </Popover>
    </div>
  );
}
