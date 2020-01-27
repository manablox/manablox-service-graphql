import { ApolloServer } from 'apollo-server'
import { GraphQLModule } from '@graphql-modules/core'
import gql from 'graphql-tag'



const { schema } = new GraphQLModule({
    typeDefs: gql`
        type Query {
            Posts: [Post]
        }

        type Post {
            id: ID
        }
    `
})

class GraphQLService {
    constructor(config){
        this.config = config
        this.server = this.config.server
        this.apollo = new ApolloServer({
            schema
        })
    }

    async Start(){
        // this.server.Use(this.config.prefix, this.Middleware)
    }

    // get Middleware(){
    //     return new ApolloServer({
    //         schema: 
    //     })
    // }
}

export default GraphQLService