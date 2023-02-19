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
const wallRouter = require("./src/routes/wall.routes");
const notificationsRouter = require("./src/routes/notifications.routes");
const resultsRouter = require("./src/routes/resultstest.routes");
const gamesResultsRouter = require("./src/routes/gamesResults.routes");
const sessionConfig = require("./src/config/session.config");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const {
  verifyCallback,
  serialize,
  deserialize,
} = require("./src/config/passport.config");

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.use(passport.initialize()); // להפעיל את התהליך
app.use(passport.session()); // ניגש לתוך הסיישן

const startegy = new LocalStrategy(verifyCallback); // סטרטגיה פועל לפי פונקציית ווריפי

passport.use(startegy); // פספורט פועל לפי סטרטגיה
passport.serializeUser(serialize); // סריילייז לוקח את האיידי של המשתמש ושומר אותו בסיישן
passport.deserializeUser(deserialize); // בודק את המפתח בסיישן ברענונים
//  דסריילייז ניגש אל הסיישן ובודק את הקוקי בכל ריענון

// express-session
// jwt
// user is logging in -> gets token

// where can I store the token?
/// cookies
/// localStorage
/// session storage

// token is sent with each request

app.use("/tests", testRouter);
app.use("/learning", learningRouter);
app.use("/memorycards", memoryCardsRouter);
app.use("/users", usersRouter);
app.use("/wall", wallRouter);
app.use("/notifications", notificationsRouter);
app.use("/resultstest", resultsRouter);
app.use("/gamesresults", gamesResultsRouter);

mongoose.connection.once("open", () => {
  console.log(`MongoDB is connected`);
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
});
