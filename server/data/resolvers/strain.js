const { Strain } = require("../../models");

const moment = require("moment");

const resolvers = {
  Query: {
    strain: async (_, { input }) => {
      let strain = await Strain.findOne(input);
      if (
        strain.seed == null ||
        moment(strain.seedFrom).diff(moment(), "months") >= 6
      ) {
        strain = resolvers.Mutation.refreshSeed(_, {
          input: {
            strain
          }
        });
      }
      return strain;
    }
    // allStrains: (_, args) => {
    //   return Strain.find({});
    // }
  },
  Mutation: {
    batchStrainEdit: async _ => {
      let strains = await Strain.find({});

      for (let strain of strains) {
      }
    },
    refreshSeed: async (_, { input }) => {
      let _strain = input.strain;
      _strain.seed = ID();
      _strain.seedFrom = new Date();
      await _strain.save();
      return _strain;
    },
    createStrain: async (_, { input }) => {
      console.log(input);
      let strain = new Strain({
        ...input
      });

      strain.save();

      return strain.toObject();
    },
    batchCreateStrain: async (_, { input }) => {
      let data = [];

      for (let strain of data) {
        resolvers.Mutation.createStrain(null, { input: { ...strain } });
      }
    }
  }
};

let ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};

module.exports = resolvers;
