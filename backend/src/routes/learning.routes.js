const router = require("express").Router();
const { Learning } = require("../models/learning.model");

router.get("/", async (req, res) => {
  const learningData = await Learning.find();
  res.json(learningData);
});
module.exports = router;
