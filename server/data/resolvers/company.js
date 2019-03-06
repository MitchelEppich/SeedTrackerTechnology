const { Company } = require("../../models");

const resolvers = {
  Query: {
    company: async (_, { input }) => {
      return Company.findOne(input);
    },
    allCompanies: _ => {
      return Company.find({});
    },
    getCompanyWebsitesRefToStt: async _ => {
      let obj = {};
      (await Company.find({})).map(a => {
        obj[a.sttId] = a.website;
      });

      return JSON.stringify(obj);
    }
  },
  Mutation: {
    createCompany: (_, { input }) => {
      let company = new Company({
        ...input
      });

      console.log(company);

      company.save();

      return company.toObject();
    }
  }
};

module.exports = resolvers;
