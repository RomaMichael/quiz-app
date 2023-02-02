const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const avatarSchema = new Schema(
  {
    url: { type: String, required: false },
    publicId: { type: String, required: false },
  },
  { _id: false }
);

// const notificationSchema = new Schema(
//   {
//     senderName: { type: String, require: true },
//     senderAvatar: { type: String, require: true },
//     content: { type: String, require: true },
//     currentTime: { type: String, require: true },
//     currentDate: { type: String, require: true },
//     reciever: { type: String, require: true },
//     seen: { type: Boolean, require: true },
//     messageToNotification: { type: String, require: true },
//   },
//   { _id: false }
// );

const userSchema = new Schema({
  _id: { type: String, required: false },
  username: { type: String, require: true },
  email: { type: String, require: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
  creationDate: { type: String, required: true },

  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["admin", "user"],
  },
  avatar: avatarSchema,
  myContent: { type: Array, require: true },
  likedPosts: { type: Array, require: true },
  testsScore: { type: Number, require: true },
});

const User = mongoose.model("Users", userSchema);

module.exports = { User, userSchema };
