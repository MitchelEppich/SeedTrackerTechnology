const { Entry } = require("../../models");

const resolvers = {
  Query: {
    entry: (_, { input }) => {
      return Entry.findOne(input);
    },
    allEntries: (_, { filter, cursor, limit }) => {
      let query = filter ? { $or: entryFilters(filter) } : {};
      return Entry.find(query)
        .sort({ createdAt: -1 })
        .skip(cursor || 0)
        .limit(limit || null);
    }
  },
  Mutation: {
    createEntry: async (_, { input }) => {
      let entry = new Entry({
        ...input
      });

      await entry.save();

      return entry.toObject();
    }
  }
};

module.exports = resolvers;
