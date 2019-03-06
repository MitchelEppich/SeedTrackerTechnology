const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//========================
// SCHEMAS
// -----------------------

/** Template for entry object */
let EntrySchema = Schema({
  email: String,
  number: Number,
  context: Number,
  sotiId: String,
  sttId: String,
  website: String,
  dispatchAt: String,
  lon: String,
  lat: String,
  createdAt: { type: Date, default: new Date() },
  country: String,
  seed: String
});

module.exports = EntrySchema;
