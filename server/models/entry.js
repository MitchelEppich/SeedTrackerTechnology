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
  company: String,
  dispatchAt: String,
  lon: String,
  lat: String,
  createdAt: { type: Date, default: new Date() },
  country: String
});

module.exports = EntrySchema;
