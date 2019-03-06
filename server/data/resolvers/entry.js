const { Entry, Strain } = require("../../models");

const resolvers = {
  Query: {
    entry: async (_, { input }) => {
      let entry = await Entry.findOne(input);

      if (entry == null && parseInt(input.number.toString().slice(3)) == 0) {
        // This is a tester
        return await resolvers.Mutation.createTesterEntry(null, { input });
      }

      return entry;
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
      let strain = await Strain.findOne({
        sotiId: input.sotiId,
        website: input.website
      });
      let sttId = strain.sttId;
      let seed = strain.seed;
      let entry = new Entry({
        ...input,
        sttId,
        seed
      });

      entry.save();

      return entry.toObject();
    },
    createTesterEntry: async (_, { input }) => {
      let sttId = input.number.toString().slice(1, 3);
      let strain = await Strain.findOne({
        sttId,
        website: input.website
      });

      let seed = strain.seed;
      let entry = new Entry({
        ...input,
        context: 2, // Context 3 for tester
        sttId,
        seed
      });

      entry.save();

      return entry.toObject();
    }
  }
};

module.exports = resolvers;
