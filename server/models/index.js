const mongoose = require("mongoose");

const EntrySchema = require("./entry");
const SeedSchema = require("./seed");

const Entry = mongoose.model("Entry", EntrySchema);
const Seed = mongoose.model("Seed", SeedSchema);

exports.Entry = Entry;
exports.Seed = Seed;
