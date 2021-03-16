import { buildASTSchema } from "graphql";
import { env } from "./env";
import { getQuestions } from "./resolvers/stack-exchange-resolver";
import * as schemas from "./schemas/schemas.graphql";

/** Root value for graphqlHTTP function with the resolvers */
const rootValue = {
  questions: getQuestions,
};

// Build schema for graphqlHTTP function
export default {
  // Set schema from DocumentNode
  schema: buildASTSchema(schemas),
  rootValue,
  // Set graphiql interface on dev mode
  graphiql: env.NODE_ENV === "dev",
};
