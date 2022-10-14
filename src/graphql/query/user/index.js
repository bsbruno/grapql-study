import { gql } from 'apollo-server'


export const userTypesDefs = gql`
    extend type Query{
      user(id:ID!): User!
      users(input:ApiFilterInput):[User!]!
    }

    type User {
    id: ID!
    userName:String!
    firstName:String!
    lastName:String!
    indexRef:Int!
    createdAt:String!
     #posts:[Posts!]!
    }

`

