import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello Vishwajeet from Apollo Server v4!',
  },
};

const startServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/graphql', expressMiddleware(server));

  await mongoose.connect('mongodb://localhost:27017/mydb');

  httpServer.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
};

startServer();
