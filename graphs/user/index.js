import CreateGraphModule from '../../utils/CreateGraphModule'

import * as typeDefs from './schema.graphql'
import resolvers from './resolvers'

import PageGraph from '../page'


export default {
    autoload: true,
    typeDefs,
    resolvers,
    imports: [
        CreateGraphModule(PageGraph)
    ]
}