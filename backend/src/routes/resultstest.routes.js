const { Result } = require("../models/testResult.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const results = await Result.find();

    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add-result", async (req, res) => {
  const newRes = new Result(req.body);
  await newRes.save();
  res.json(newRes);
});

module.exports = router;
