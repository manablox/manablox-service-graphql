import ExpressService from 'manablox-service-express'
import GraphQLService from '../index'

import Router from 'manablox-service-express/router'

const server = new ExpressService({
    ip: '0.0.0.0',
    port: 3550
})

// const router = new Router(server)
const graphql = new GraphQLService({
    prefix: '/graphql',
    server
})

const StartServer = async () => {
    graphql.Start()
    server.Start()
}

StartServer()