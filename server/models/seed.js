const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//========================
// SCHEMAS
// -----------------------

/**
 * Template for seed object
 *
 * p -> percent
 * o -> outdoor
 * i -> indoor
 * */
let SeedSchema = Schema({
  company: String,
  sttId: String,
  seed: String,
  seedFrom: { type: Date, default: new Date() }
});

module.exports = SeedSchema;
