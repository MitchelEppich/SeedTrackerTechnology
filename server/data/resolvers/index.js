const EntryResolvers = require("./entry");

const resolvers = {
  Query: {
    ...EntryResolvers.Query
  },
  Mutation: {
    ...EntryResolvers.Mutation
  }
};

module.exports = resolvers;
