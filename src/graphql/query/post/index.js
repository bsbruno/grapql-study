import { gql } from 'apollo-server'


export const postTypeDefs = gql`
    extend type Query{
      post(id:ID!): Posts!
      posts(input:ApiFilterInput):[Posts!]!
    }

    type Posts {
      id: ID!
      title:String!
      body:String!
      # userId:User!
      indexRef:Int!
      createdAt:String!
      timestamp:String!
    }

`

