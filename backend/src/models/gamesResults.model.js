const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const gamesSchema = new Schema({
  userId: { type: String, require: true },
  tries: { type: Number, require: true },
  gameType: { type: String, require: true },
});

const GameResult = mongoose.model("Gamesresult", gamesSchema);

module.exports = { GameResult };
