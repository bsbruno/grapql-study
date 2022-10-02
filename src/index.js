 import {ApolloServer, gql} from 'apollo-server'
 import https from 'https'
 import fs from 'fs'

const options ={
  key:fs.readFileSync('key.pem'),
  cert:fs.readFileSync('cert.pem')
}
 //! NOT NULL
const server = new ApolloServer({
  typeDefs:gql`
   type Query{
  id:ID!,
  age:Int,
  name:String,
  married:Boolean,
  friends:[String!]!,
  average:Float

   }
  `,
  resolvers: {
    Query: {
      id:() => '1', //string
      age:() => 12, //integer
      name:() => 'John', //string
      married:() => true, //boolean
      friends: () => [
        '10'
      ],
      average: () => Math.random()

    }}
    })

    server.listen(4000).then(({https,options,url}) => {

     console.log(`listening on ${url}`)
    })






