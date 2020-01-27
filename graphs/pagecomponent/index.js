import * as typeDefs from './schema.graphql'
import resolvers from './resolvers'

export default {
    autoload: false,
    typeDefs,
    resolvers,
    imports: []
}