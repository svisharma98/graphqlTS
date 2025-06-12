import { gql } from 'graphql-tag';  // 👈 THIS import is mandatory

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    me: User
    users: [User!]!
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
    createUser(name: String!, email: String!, password: String!, role: String!): User!
    updateUser(id: ID!, name: String, email: String, age: Int): User
    deleteUser(id: ID!): String
  }
`;

// export default typeDefs;