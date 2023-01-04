const { Test } = require("../models/test.model");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const data = await Test.find();
  res.json(data);
});

module.exports = router;
