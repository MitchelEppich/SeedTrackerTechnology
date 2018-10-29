const mongoose = require("mongoose");

const EntrySchema = require("./entry");

const Entry = mongoose.model("Entry", EntrySchema);

exports.Entry = Entry;
