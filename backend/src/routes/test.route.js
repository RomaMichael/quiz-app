const testRouter = require("express").Router();

testRouter.get("/", async (req, res) => {
  const data = res.json(data);
});

module.exports = { testRouter };
