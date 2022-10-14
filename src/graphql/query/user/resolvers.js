

const user = async (obj, arg, ctx, info) => {
  const idUser = arg.id
  const user = await ctx.fetch(`http://localhost:3000/users/${idUser}`)
  return user.json()
}
const users = async (obj, arg, ctx, info) => {

  const users = await ctx.fetch('http://localhost:3000/users')
  return users.json()
}


export const userResolvers = {
  Query: {
    user,
    users

  }
}
