import "graphql-import-node";
import { install } from "source-map-support";
import { env } from "./env";

import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

import { buildASTSchema } from "graphql";
import * as schemas from "./schemas/schemas.graphql";
import { stackExchangeResolver } from "./resolvers/stack-exchange-resolver";

if (env.NODE_ENV === "prod") install();

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildASTSchema(schemas),
    rootValue: stackExchangeResolver,
    graphiql: env.NODE_ENV === "dev", // Set graphiql interface on dev mode
  }),
);

app.listen(env.PORT, env.HOST, () => {
  console.log("Running a GraphQL API server at http://localhost:5000/graphql");
});
