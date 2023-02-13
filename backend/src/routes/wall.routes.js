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

router.delete("/delete-post/:id", async (req, res) => {
  try {
    const deleted = await Wall.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update-post/:id", async (req, res) => {
  try {
    const updated = await Wall.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
