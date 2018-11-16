const mongoose = require("mongoose");

const EntrySchema = require("./entry");
const ErrorSchema = require("./error");
const SeedSchema = require("./seed");

const Entry = mongoose.model("Entry", EntrySchema);
const Error = mongoose.model("Error", ErrorSchema);
const Seed = mongoose.model("Seed", SeedSchema);

exports.Entry = Entry;
exports.Error = Error;
exports.Seed = Seed;
