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
  strain: String,
  genetic: Number,
  p_thc: Number,
  p_cbd: Number,
  p_cbn: Number,
  p_indica: Number,
  p_sativa: Number,
  p_ruderalis: Number,
  o_yield: Number,
  i_yield: Number,
  grow_time: String,
  effect: String,
  origin: String,
  seed: String,
  seedFrom: { type: Date, default: new Date() }
});

module.exports = SeedSchema;
