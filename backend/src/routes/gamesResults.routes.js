const { GameResult } = require("../models/gamesResults.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const results = await GameResult.find();

  res.json(results);
});

router.post("/new-result", async (req, res) => {
  const newRes = new GameResult(req.body);
  await newRes.save();
  res.json(newRes);
});

module.exports = router;
