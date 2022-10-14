

const post = async (obj, arg, ctx, info) => {
    const idPost = arg.id
    const post = await ctx.fetch(`http://localhost:3000/posts/${idPost}`)
    return post.json()
}
const posts = async (obj, arg, ctx, info) => {
    const queryParms = new URLSearchParams(arg.input)
    console.log(queryParms)
    const posts = await ctx.fetch(`http://localhost:3000/posts?${queryParms}`)
    return posts.json()
}


export const postResolvers = {
    Query: {
        post,
        posts
    },
    // Chama toda a vez para todos os returns 
    Posts: {
        timestamp: (parent) => {
            return `${Date.now()},${parent.id}`
        }
    }
}
