const EntryResolvers = require("./entry");
const ErrorResolvers = require("./error");
const SeedResolvers = require("./seed");
const StrainResolvers = require("./strain");
const CompanyResolvers = require("./company");

const NodeGeocoder = require("node-geocoder");

const { Entry, Error } = require("../../models");

let options = {
  provider: "openstreetmap"
};

let geocoder = NodeGeocoder(options);

const resolvers = {
  Query: {
    ...EntryResolvers.Query,
    // ...SeedResolvers.Query,
    ...ErrorResolvers.Query,
    ...CompanyResolvers.Query,
    ...StrainResolvers.Query,
    getEmailList: async (_, { input }) => {
      let errorEmails = (await Error.find({})).map(a => a.email);
      let entryEmails = (await Entry.find({})).map(a => a.email);
      return [...new Set(errorEmails.concat(...entryEmails))];
    }
  },
  Mutation: {
    ...EntryResolvers.Mutation,
    // ...SeedResolvers.Mutation,
    ...ErrorResolvers.Mutation,
    ...StrainResolvers.Mutation,
    ...CompanyResolvers.Mutation,
    getCoordinates: async (_, { input }) => {
      let _country = input.country;
      let _state = input.state;
      let _isCustomer = input.isCustomer;

      let coords = [];
      let locs = _country == null ? [_state] : _country;
      for (let loc of locs) {
        if (loc == "Central America") loc = "Costa Rica";
        let options = {};
        if (!_isCustomer) {
          if (_country == null) options.state = loc;
          else options.country = loc;
        } else {
          options.state = _state[0];
          options.country = _country[0];
        }
        let _coords = (await geocoder.geocode(options))[0];
        if (_coords == null) _coords = { longitude: 0, latitude: 0 };
        coords.push({ lon: _coords.longitude, lat: _coords.latitude });
      }
      return { coords };
    }
  }
};

module.exports = resolvers;
