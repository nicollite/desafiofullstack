import { buildASTSchema } from "graphql";
import { env } from "node:process";
import { stackExchangeResolver } from "./resolvers/stack-exchange-resolver";
import * as schemas from "./schemas/schemas.graphql";

export default {
  schema: buildASTSchema(schemas),
  rootValue: stackExchangeResolver,
  graphiql: env.NODE_ENV === "dev", // Set graphiql interface on dev mode
};
