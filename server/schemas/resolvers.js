const userResolver = require('./resolvers/userResolver');
const blogResolver = require('./resolvers/blogResolver');

const resolvers = {
    Query: {
        ...blogResolver.Query,
    },
    Mutation: {
        ...userResolver.Mutation,
        ...blogResolver.Mutation,
    }
};

module.exports = resolvers;