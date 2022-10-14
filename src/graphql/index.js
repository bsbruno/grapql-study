import { ApolloServer, gql } from 'apollo-server'
import { apiFilterTypeDefs } from './api-filter/typedefs'
import { postTypeDefs } from './query/post'
import { postResolvers } from './query/post/resolvers'
import { userTypesDefs } from './query/user'
import { userResolvers } from './query/user/resolvers'


const rootTypeDefs = gql`
    type Query{
      _empty:Boolean
    }
`

const rootResolvers = {
  Query: {
    _empty: () => false
  }
}


export const typeDefs = [rootTypeDefs, userTypesDefs, postTypeDefs, apiFilterTypeDefs]
export const resolvers = [rootResolvers, userResolvers, postResolvers]
