import { GraphQLModule } from '@graphql-modules/core'

export default (graph) => {
    let graphData = graph
    if(typeof graph.module !== 'undefined') graphData = graph.module

    let moduleData = {}
    if(graphData.typeDefs) moduleData.typeDefs = graphData.typeDefs
    if(graphData.resolvers) moduleData.resolvers = graphData.resolvers
    if(graphData.imports) moduleData.imports = graphData.imports
    
    let moduleContext = {}
    if(graphData.context) moduleContext = graphData.context 

    moduleData.context = (ctx) => { return { ...ctx, ...moduleContext } }

    return new GraphQLModule({ ...moduleData })
}