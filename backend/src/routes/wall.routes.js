const Wall = require("../models/wall.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const content = await Wall.find();
  res.json(content);
});

router.post("/create-new", async (req, res) => {
  const post = new Wall(req.body);
  await post.save();

  res.json(post);
});

module.exports = router;
