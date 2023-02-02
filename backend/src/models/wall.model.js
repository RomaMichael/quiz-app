const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { userSchema } = require("./user.model");

const wallSchema = new Schema({
  _id: { type: String, require: true },
  postContent: { type: String, require: true },
  postAuthor: { type: Object, require: true },
  currentTime: { type: String, require: true },
  currentDate: { type: String, require: true },
  likes: { type: Array, require: true },
  user: { type: userSchema, require: true },
});

const Wall = mongoose.model("Wall", wallSchema);
module.exports = Wall;
