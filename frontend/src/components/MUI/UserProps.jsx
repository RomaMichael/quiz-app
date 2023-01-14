import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";
export default function UserProps({ user, logout }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutFunction = () => {
    handleClose();
    logout();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          width: "60px",
          height: "60px",

          backgroundImage: `url(${user.avatar.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "100px",
          border: "1px solid red",
        }}
      ></Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link
          to="/userprofile"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>

        <MenuItem onClick={logoutFunction}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
