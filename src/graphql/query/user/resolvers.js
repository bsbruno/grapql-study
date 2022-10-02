const user = () =>{
  return{
    id: '1',
    name: 'John'
  }
}
const users = () =>{
  return[
    {
      id: '45',
      name: 'John'
    },
    {
      id: '113',
      name: 'John123'
    }
  ]
}



export const userResolvers ={
  Query: {
    user,
    users

  }
}
