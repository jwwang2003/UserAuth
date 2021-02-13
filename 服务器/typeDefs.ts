import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID,
    firstName: String,
    lastName: String,
    email: String,
    password: String
  }

  type Query {
    getUser(email: String!): User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
  }
`;