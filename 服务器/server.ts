import dotenv from 'dotenv';
dotenv.config(); // env variables
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

import endpoint from './endpoints.config';

// ApolloServer & graphQL
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app });

// MongoDB Connection
mongoose.connect(endpoint.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.on('open', () => console.log('顺利连接MongoDB数据库'));

// Start server
app.listen(endpoint.SERVER_PORT, () => {
  console.log(`服务器启动 端口：${endpoint.SERVER_PORT}`);
});