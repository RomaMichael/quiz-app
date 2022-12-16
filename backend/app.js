require("dotenv").config();
require("./src/config/mongoose.config")();
const express = require("express");
const mongoose = require("mongoose");
const PORT = 8006;
const app = express();
const cors = require("cors");
const { testRouter } = require("./src/routes/test.route");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/test", testRouter);

mongoose.connection.once("open", () => {
  console.log(`MongoDB is connected`);
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
});
