let mongoose = require("mongoose");

let population = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Edad: String,
  Hombre: Number,
  Mujer: Number,
  Total: Number,
});

module.exports = mongoose.model("Population", population);
