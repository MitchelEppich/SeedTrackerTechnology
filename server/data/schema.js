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
  createdAt: String,
  strain: String,
  lon: String, 
  lat: String,
  dispatchAt: String
}

input EntryInput {
  email: String
  number: Int
  context: Int,
  lon: String,
  lat: String,
  strain: String,
  dispatchAt: String
}

type Coordinates {
  lon: String,
  lat: String
}

input CoordinatesInput {
  street: String,
  city: String,
  state: String,
  country: String,
  postalcode: String
}

type Mutation {
  createEntry(input: EntryInput!): Entry,
  getCoordinates(input: CoordinatesInput!) : Coordinates
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
