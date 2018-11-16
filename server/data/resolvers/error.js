const { Error } = require("../../models");

const resolvers = {
  Query: {
    error: (_, { input }) => {
      return Error.findOne(input);
    },
    allErrors: (_, args) => {
      return Error.find({});
    }
  },
  Mutation: {
    createError: async (_, { input }) => {
      let error = new Error({
        ...input
      });

      await error.save();

      return error.toObject();
    }
  }
};

module.exports = resolvers;
