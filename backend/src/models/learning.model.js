const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const learningSchema = new Schema({
  category: { type: String, require: true },
  subCategory: { type: String, require: true },
  img: { type: String, require: true },
  title: { type: String, require: true },
  subTitle: { type: String, require: true },
  information: { type: String, require: true },
  // id: { type: String, require: false },
});

const Learning = mongoose.model("Learning", learningSchema);

module.exports = { Learning };
