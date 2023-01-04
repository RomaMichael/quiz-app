const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const memoryCardsSchema = new Schema({
  img: { type: String, require: true },
  name: { type: String, require: true },
  open: { type: Boolean, require: true },
  // id: { type: String, require: false },
});

const MemoryCards = mongoose.model("Memorycards", memoryCardsSchema);

module.exports = { MemoryCards };
