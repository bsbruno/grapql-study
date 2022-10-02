import {ApolloServer, gql} from 'apollo-server'
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


  export const typeDefs = [rootTypeDefs,userTypesDefs]
  export const resolvers = [rootResolvers,userResolvers]
