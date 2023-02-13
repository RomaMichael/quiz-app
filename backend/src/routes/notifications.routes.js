const { Notification } = require("../models/notification.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    console.log(error);
  }
});

router.post("/addNew", async (req, res) => {
  console.log(req.body);
  try {
    const newNote = new Notification(req.body);
    await newNote.save();

    res.json(newNote);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update-notification/:id", async (req, res) => {
  console.log(` id of item: ${req.params.id}`);

  try {
    const updated = await Notification.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    console.log(`updated: ${updated}`);
    res.json(updated);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
