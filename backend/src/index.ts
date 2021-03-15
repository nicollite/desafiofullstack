import "graphql-import-node";
import { install } from "source-map-support";
import { env } from "./env";

import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import graphqlHttpConfig from "./graphql-http-config";

// Use source-map-support install in prod mode
if (env.NODE_ENV === "prod") install();

const app = express();

app.use(cors());
app.use("/graphql", graphqlHTTP(graphqlHttpConfig));

app.listen(env.PORT, env.HOST, () => {
  console.log("Running a GraphQL API server at http://localhost:5000/graphql");
});
