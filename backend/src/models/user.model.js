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
  username: { type: String, require: true },
  age: { type: Number, require: true },
  email: { type: String, require: true },
  hash: { type: String, required: true },
  salt: { type: String, required: true },
  avatar: avatarSchema,
});

const User = mongoose.model("Users", userSchema);

module.exports = { User };
