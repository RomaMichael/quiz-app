const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const resultSchema = new Schema({
  testType: { type: String, require: true },
  testLevel: { type: String, require: true },
  result: { type: Number, require: true },
  resultPercent: { type: Number, require: true },
  userId: { type: String, require: true },
});

const Result = mongoose.model("Resultstest", resultSchema);

module.exports = { Result };
