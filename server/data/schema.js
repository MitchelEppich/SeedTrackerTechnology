const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

// seed(input: SeedInput) : Seed
// allSeeds: [Seed]!
const typeDefs = `
type Query {
  entry(input: EntryInput) : Entry
  allEntries(filter: EntryFilters, cursor: Int, limit: Int): [Entry]!
  strain(input: StrainInput): Strain
  error(input: ErrorInput) : Error
  allErrors: [Error]!
}

input EntryFilters {
  OR: [EntryFilters!]
  date_of: String
  context_of: Int
}

type Error {
  _id: String
  email: String
  number: String
  context: Int
  createdAt: String
}

input ErrorInput {
  email: String
  number: String
  context: Int
}

type Entry {
  _id: String
  email: String
  number: Int
  context: Int
  createdAt: String,
  sttId: String,
  sotiId: String,
  company: String
  lon: String, 
  lat: String,
  dispatchAt: String
  country: String
}

input EntryInput {
  email: String
  number: Int
  context: Int,
  lon: String,
  lat: String,
  sotiId: String,
  sttId: String
  company: String
  dispatchAt: String
  country: String
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

type Strain {
  _id: String
  company: String,
  name: String,
  price: [Int],
  description: String,
  effect: [Int],
  yield: [Int],
  genetic: Int,
  flowerTime: [Int],
  difficulty: Int,
  indica: Float,
  sativa: Float,
  ruderalis: Float,
  type: Int,
  environment: Int,
  relations: [String],
  pThc: [Float],
  pCbd: [Float],
  pCbn: [Float],
  sotiId: String,
  country: [Int],
  sttId: String,
  releaseDate: String,
  isFeatured: Boolean
    seed: String,
  seedFrom:String
}

input StrainInput {
  company: String,
  name: String,
  price: [Int],
  description: String,
  effect: [Int],
  yield: [Int],
  genetic: Int,
  flowerTime: [Int],
  difficulty: Int,
  indica: Float,
  sativa: Float,
  ruderalis: Float,
  type: Int,
  environment: Int,
  relations: [String],
  pThc: [Float],
  pCbd: [Float],
  pCbn: [Float],
  sotiId: String,
  country: [Int],
  sttId: String,
  releaseDate: String,
  isFeatured: Boolean
}

input batchInput {
  json: String
}

type Mutation {
  createEntry(input: EntryInput!): Entry
  createTesterEntry(input: EntryInput!): Entry
  createError(input: ErrorInput!): Error
  getCoordinates(input: CoordinatesInput!) : Coordinates
  
  refreshSeed(input: StrainInput): Strain
  createStrain(input: StrainInput): Strain
  batchCreateStrain(input: batchInput): String
}

`;
// transitionSeeds: Seed,
// updateOriginOfSeeds: Seed,

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
