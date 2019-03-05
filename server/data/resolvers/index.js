const EntryResolvers = require("./entry");
const ErrorResolvers = require("./error");
const SeedResolvers = require("./seed");
const StrainResolvers = require("./strain");

const NodeGeocoder = require("node-geocoder");

let options = {
  provider: "openstreetmap"
};

let geocoder = NodeGeocoder(options);

const resolvers = {
  Query: {
    ...EntryResolvers.Query,
    // ...SeedResolvers.Query,
    ...ErrorResolvers.Query,
    ...StrainResolvers.Query
  },
  Mutation: {
    ...EntryResolvers.Mutation,
    // ...SeedResolvers.Mutation,
    ...ErrorResolvers.Mutation,
    ...StrainResolvers.Mutation,
    getCoordinates: async (_, { input }) => {
      let coords = await new Promise((resolve, reject) => {
        geocoder
          .geocode({
            // postalcode: input.postalcode,
            // street: input.street,
            // city: input.city,
            state: input.state,
            country: input.country
          })
          .then(res => {
            resolve(
              res.map(object => {
                return {
                  lon: object.longitude,
                  lat: object.latitude
                };
              })[0]
            );
          });
      });
      return coords;
    }
  }
};

module.exports = resolvers;
