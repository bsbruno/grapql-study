import { ApolloServer, gql } from 'apollo-server'
import https from 'https'
import fs from 'fs'
import { resolvers, typeDefs } from './graphql'
import fetch from 'node-fetch'

// const options ={
//   key:fs.readFileSync('key.pem'),
//   cert:fs.readFileSync('cert.pem')
// }
//! NOT NULL
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      fetch
    }
  }
})

server.listen(4000).then(({ https, options, url }) => {

  console.log(`listening on ${url}`)
})






