import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { FaUserGraduate } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import uuid4 from "uuid4";
import "./SignUp.css";
import { useState } from "react";

import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../../context/UserProvider";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      mb="30px"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        QuizzApp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [createdUser, setCreatedUser] = useState({
    _id: uuid4(),
    myContent: [],
    likedPosts: [],
    testsScore: 0,
  });

  const { login } = useUsers();

  const navigate = useNavigate();

  const createNewUser = async (createdUser) => {
    if (createdUser.password !== createdUser.verifyPassword) {
      console.log("error");
      return;
    }

    const formData = new FormData();
    formData.append("_id", uuid4());
    formData.append("username", createdUser.username);
    formData.append("email", createdUser.email);
    formData.append("password", createdUser.password);
    formData.append("avatar", createdUser.avatar);
    formData.append("myContent", createdUser.myContent);
    formData.append("creationDate", moment().format("MMM Do YY"));

    await fetch("http://localhost:8006/users/register", {
      method: "POST",
      body: formData,
    });

    const username = createdUser.username;
    const password = createdUser.password;
    const credentials = {
      username,
      password,
    };

    login(credentials);
    navigate("/", { replace: true });
  };

  const signUp = async (event) => {
    event.preventDefault();
    try {
      await createNewUser(createdUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#1976D2" }}>
              <FaUserGraduate />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={signUp} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    autoFocus
                    onChange={(e) =>
                      setCreatedUser((prev) => {
                        return { ...prev, [e.target.name]: e.target.value };
                      })
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) =>
                      setCreatedUser((prev) => {
                        return { ...prev, [e.target.name]: e.target.value };
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) =>
                      setCreatedUser((prev) => {
                        return { ...prev, [e.target.name]: e.target.value };
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="verifyPassword"
                    label="Verify password"
                    type="password"
                    id="verify password"
                    autoComplete="new-password"
                    onChange={(e) =>
                      setCreatedUser((prev) => {
                        return { ...prev, [e.target.name]: e.target.value };
                      })
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <input
                    required
                    fullWidth
                    name="file"
                    label=""
                    type="file"
                    id="file"
                    onChange={(e) =>
                      setCreatedUser({
                        ...createdUser,
                        avatar: e.target.files[0],
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" />
                }
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/loginpage" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
