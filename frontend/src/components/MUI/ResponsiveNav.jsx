import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { GoThreeBars } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { useUsers } from "../../context/UserProvider";
import { Link } from "react-router-dom";

export default function ResponsiveNav({ logout }) {
  const { user } = useUsers();

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <GoThreeBars style={{ fontSize: "30px", color: "black" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <Link
              to={`/${user._id}`}
              style={{
                textDecoration: "none",
                color: "black",
              }}
              onClick={toggleDrawer(anchor, false)}
            >
              {" "}
              <p
                style={{
                  fontWeight: "700",
                  width: "150px",
                  fontSize: "22px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {" "}
                My profile
              </p>
            </Link>
            <Link
              to="/statistics"
              style={{ textDecoration: "none", color: "black" }}
              onClick={toggleDrawer(anchor, false)}
            >
              {" "}
              <p
                style={{
                  fontWeight: "700",
                  width: "150px",
                  fontSize: "22px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {" "}
                Statistics
              </p>
            </Link>

            <Link
              to="/testspage"
              style={{ textDecoration: "none", color: "black" }}
              onClick={toggleDrawer(anchor, false)}
            >
              <p
                style={{
                  fontWeight: "700",
                  width: "150px",
                  fontSize: "22px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Tests
              </p>
            </Link>

            <Link
              to="/games"
              style={{ textDecoration: "none", color: "black" }}
              onClick={toggleDrawer(anchor, false)}
            >
              <p
                style={{
                  fontWeight: "700",
                  width: "150px",
                  fontSize: "22px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Games
              </p>
            </Link>
            <p
              style={{
                fontWeight: "700",
                width: "150px",
                fontSize: "22px",
                display: "flex",
                justifyContent: "flex-start",
                cursor: "pointer",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={logout}
            >
              <FiLogOut /> Logout
            </p>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
