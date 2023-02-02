const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const notificationSchema = new Schema({
  _id: { type: String, required: true },
  senderName: { type: String, required: true },
  senderAvatar: { type: String, required: true },
  content: { type: String, required: true },
  currentTime: { type: String, required: true },
  currentDate: { type: String, required: true },
  reciever: { type: Object, required: true },
  seen: { type: Boolean, required: true },
  messageToNotification: { type: String, required: true },
  newNotification: { type: Boolean, required: true },
});

const Notification = mongoose.model("Notifications", notificationSchema);

module.exports = { Notification };
