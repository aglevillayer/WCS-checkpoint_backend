import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/CountryResolver";
import { dataSource } from "./datasource";

const port = 4000;

async function startServerApollo() {
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  console.log("datasource initialization");
  await dataSource.initialize();

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startServerApollo();
