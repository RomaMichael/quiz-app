const { Notification } = require("../models/notification.model");
// const { updateNotification } = require("../services/notifications.services");

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
  try {
    const newNote = new Notification(req.body);
    await newNote.save();

    res.json(newNote);
  } catch (error) {
    console.log(error);
  }
});

router.put("/update-notification/:id", async (req, res) => {
  try {
    const updated = await Notification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    console.log(`updated: ${updated}`);
    res.json(updated);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
