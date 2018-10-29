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
  createdAt: { type: Date, default: new Date() }
});

module.exports = EntrySchema;
