const { Seed } = require("../../models");

const moment = require("moment");

let TYPES = Object.freeze({
  Feminized: 0,
  "Auto Flower": 1,
  Regular: 2,
  Medical: 3
});

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

const resolvers = {
  Query: {
    seed: async (_, { input }) => {
      let seed = await Seed.findOne(input);
      if (
        seed.seed == null ||
        moment(seed.seedFrom).diff(moment(), "months") >= 6
      )
        seed = resolvers.Mutation.refreshSeed(_, {
          input: {
            seed: seed
          }
        });

      return seed;
    },
    allSeeds: (_, i) => {
      return Seed.find({});
    }
  },
  Mutation: {
    refreshSeed: async (_, { input }) => {
      input.seed["seed"] = ID();
      input.seed["seedFrom"] = new Date();
      await input.seed.save();
      return input.seed;
    },
    updateOriginOfSeeds: async () => {
      let seeds = await Seed.find({});

      for (let seed of seeds) {
        _seed = seed.toObject();
        if (_seed.origin.indexOf("USA") != -1) {
          _seed.origin = _seed.origin.replace("USA", "United States");

          seed.remove();

          new Seed({
            ..._seed
          }).save();
        }
      }
    },
    transitionSeeds: async () => {
      let seeds = await Seed.find({});

      for (let seed of seeds) {
        _seed = seed.toObject();
        _seed["p_indica"] = parseInt(
          _seed.indica.replace(new RegExp("[-+%]", "gi"), "")
        );
        delete _seed.indica;
        _seed["p_sativa"] = parseInt(
          _seed.sativa.replace(new RegExp("[-+%]", "gi"), "")
        );
        delete _seed.sativa;
        _seed["p_ruderalis"] = _seed.ruderalis
          ? parseInt(_seed.ruderalis.replace(new RegExp("[-+%]", "gi"), ""))
          : undefined;
        delete _seed.ruderalis;

        _seed["o_yield"] = parseInt(_seed.yield_outdoor.replace("g", ""));
        delete _seed.yield_outdoor;

        _seed["i_yield"] = parseInt(_seed.yield_indoor.replace("g", ""));
        delete _seed.yield_indoor;

        _seed["grow_time"] = _seed.grow_time
          .replace("Weeks", "")
          .replace("-", " to ")
          .trim();

        let content = _seed["thc"].split(" ");
        // console.log(genetic);

        _seed["p_thc"] = parseFloat(
          content[1].replace(new RegExp("[-+%]", "gi"), "")
        );
        _seed["p_cbd"] = parseFloat(
          content[3].replace(new RegExp("[-+%]", "gi"), "")
        );
        _seed["p_cbn"] = content[5]
          ? parseFloat(content[5].replace(new RegExp("[-+%]", "gi"), ""))
          : undefined;

        delete _seed.thc;

        let genetic = "";
        let type = _seed["type"];

        if (type.indexOf("Auto Flower") != -1) genetic += TYPES["Auto Flower"];
        if (type.indexOf("Feminized") != -1) genetic += TYPES.Feminized;
        if (type.indexOf("Regular") != -1) genetic += TYPES.Regular;
        if (type.indexOf("Medical") != -1) genetic += TYPES.Medical;

        _seed["genetic"] = genetic;
        delete _seed.type;

        delete _seed._id;

        seed.remove();
        new Seed({
          ..._seed
        }).save();
      }
    }
  }
};

module.exports = resolvers;
