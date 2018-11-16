const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//========================
// SCHEMAS
// -----------------------

/** Template for entry object */
let ErrorSchema = Schema({
  email: String,
  number: String,
  context: Number,
  createdAt: { type: Date, default: new Date() }
});

module.exports = ErrorSchema;
