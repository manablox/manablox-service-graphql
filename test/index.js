import ExpressService from 'manablox-service-express'
import GraphQLService from '../index'

import gql from 'graphql-tag'




let graphs = []
const graphFiles = require.context('../graphs', true, /index\.js$/)
graphFiles.keys().map((key) => { graphs.push({ name: key.split('/').reverse()[1], module: graphFiles(key).default }) })

graphs = graphs.filter((graph) => { return graph.module.autoload == true })



const server = new ExpressService({
    ip: '0.0.0.0',
    port: 3550
})

const graphql = new GraphQLService({
    prefix: '/graphql',
    server,
    graphs
})




const StartServer = async () => {
    graphql.Start()
    server.Start()

    setTimeout(() => {
        graphql.SetContextData({ testing: true })
    }, 2000)

    setTimeout(() => {
        let typeDefs = `
            type Query {
                Comments: [Comment]
            }

            type Comment {
                _id: ID
                name: String
            }
        `

        let resolvers = {
            Query: {
                Comments(root, args, context, info){
                    return []
                }
            }
        }

        graphql.AddGraphModule({
            typeDefs: gql`${ typeDefs }`,
            resolvers,

        })
    }, 4000)
}

StartServer()