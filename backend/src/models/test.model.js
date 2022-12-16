const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const testSchema = new Schema({
  question: { type: String, require: true },
  questionUrl: { type: String, require: false },
  wrongAnswers: { type: [String], require: true },
  rightAns: { type: String, require: true },
  subject: { type: String, require: true },
  level: { type: String, require: true },
});

const Test = mongoose.model("Test", testSchema);

module.exports = { Test };
