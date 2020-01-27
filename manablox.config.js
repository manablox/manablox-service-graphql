module.exports = {
    webpack: (config, options, webpack) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            loader: 'graphql-tag/loader'
        })

        return config
    }
}