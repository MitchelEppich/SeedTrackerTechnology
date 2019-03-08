const mongoose = require("mongoose");

const EntrySchema = require("./entry");
const ErrorSchema = require("./error");
const SeedSchema = require("./seed");
const StrainSchema = require("./strain");
const CompanySchema = require("./company");
const EmailSchema = require("./email");

const Entry = mongoose.model("Entry", EntrySchema);
const Error = mongoose.model("Error", ErrorSchema);
const Seed = mongoose.model("Seed", SeedSchema);
const Strain = mongoose.model("Strain", StrainSchema);
const Company = mongoose.model("Company", CompanySchema);
const Email = mongoose.model("Email", EmailSchema);

exports.Entry = Entry;
exports.Error = Error;
exports.Seed = Seed;
exports.Strain = Strain;
exports.Company = Company;
exports.Email = Email;
