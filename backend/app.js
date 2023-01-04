require("dotenv").config();
require("./src/config/mongoose.config")();
const express = require("express");
const mongoose = require("mongoose");
const PORT = 8006;
const app = express();
const session = require("express-session");
const cors = require("cors");
const testRouter = require("./src/routes/test.routes");
const memoryCardsRouter = require("./src/routes/memorycards.routes");
const learningRouter = require("./src/routes/learning.routes");
const usersRouter = require("./src/routes/users.routes");
const sessionConfig = require("./src/config/session.config");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const {
  verifyCallback,
  serialize,
  deserialize,
} = require("./src/config/passport.config");
// const userRouter = require("./src/routes/users.routes");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

const startegy = new LocalStrategy(verifyCallback);

passport.use(startegy);
passport.serializeUser(serialize);
passport.deserializeUser(deserialize);

app.use("/tests", testRouter);
app.use("/learning", learningRouter);
app.use("/memorycards", memoryCardsRouter);
app.use("/users", usersRouter);

mongoose.connection.once("open", () => {
  console.log(`MongoDB is connected`);
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
});
