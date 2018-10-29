const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  sendString: String
  entry(input: EntryInput) : Entry
  allEntries(filter: EntryFilters, cursor: Int, limit: Int): [Entry]!
}

input EntryFilters {
  OR: [EntryFilters!]
  date_of: String
  context_of: Int
}

type Entry {
  _id: String
  email: String
  number: Int
  context: Int
  createdAt: String
}

input EntryInput {
  email: String
  number: Int
  context: Int
}

type Mutation {
  createEntry(input: EntryInput!): Entry
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
