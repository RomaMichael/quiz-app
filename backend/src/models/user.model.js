const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const avatarSchema = new Schema(
  {
    url: { type: String, required: false },
    publicId: { type: String, required: false },
  },
  { _id: false }
);

const userSchema = new Schema({
  _id: { type: String, required: false },
  username: { type: String, require: true },
  email: { type: String, require: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
  creationDate: { type: String, required: true },
  results: { type: Array, require: true },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["admin", "user"],
  },
  avatar: avatarSchema,
  myContent: { type: Array },
});

const User = mongoose.model("Users", userSchema);

module.exports = { User, userSchema };
