const router = require("express").Router();
const { MemoryCards } = require("../models/memorycards.model");

router.get("/", async (req, res) => {
  const cards = await MemoryCards.find();
  res.json(cards);
});

module.exports = router;
