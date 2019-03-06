const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//========================
// SCHEMAS
// -----------------------

/** Template for company object */
let CompanySchema = Schema({
  name: String,
  website: String,
  location: [Number],
  country: String,
  phone: String,
  email: String,
  mediaUrls: [String],
  image: String,
  sttId: String
});

module.exports = CompanySchema;
