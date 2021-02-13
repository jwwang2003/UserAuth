import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getUser: [User]
  }

  type User {
    id: ID,
    firstName: String,
    lastName: String,
    email: String,
    password: String
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
  }
`;