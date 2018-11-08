const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  entry(input: EntryInput) : Entry
  allEntries(filter: EntryFilters, cursor: Int, limit: Int): [Entry]!
  seed(input: SeedInput) : Seed
  allSeeds: [Seed]!
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

type Seed {
  _id: String
  strain: String,
  genetic: Int
  p_thc: Float
  p_cbd: Float
  p_cbn: Float
  p_indica: Int,
  p_sativa: Int,
  p_ruderalis: Int,
  o_yield: Int,
  i_yield: Int,
  grow_time: String,
  effect: String,
  origin: String
  seed: String
  seedFrom: String
}

input SeedInput {
  strain: String,
  type: Int,
  p_thc: Float
  p_cbd: Float
  p_cbn: Float
  p_indica: Int,
  p_sativa: Int,
  p_ruderalis: Int,
  o_yield: Int,
  i_yield: Int,
  grow_time: String,
  effect: String,
  origin: String
  seed: String
  seedFrom: String
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
  transitionSeeds: Seed,
  updateOriginOfSeeds: Seed,
  refreshSeed(input: SeedInput!): Seed
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
