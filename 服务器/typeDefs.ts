import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    firstName: String!,
    lastName: String!,
    email: String!,
  }

  type AuthToken {
    token: String!
  }

  type Query {
    authUser(email: String!, password: String): AuthToken!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
  }
`;