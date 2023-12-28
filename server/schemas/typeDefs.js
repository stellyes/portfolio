const typeDefs = `
    type BlogPost {
        _id: ID
        title: String
        body: String
        createdAt: String
    }

    type Query {
        getAllBlogPosts: [BlogPost]
        getBlogPostById(id: ID!): BlogPost
    }

    type Mutation {
        addBlogPost(title: String!, body: String!): BlogPost
        updateBlogPost(id: ID!, title: String!, body: String!): BlogPost
        deleteBlogPost(id: ID!): BlogPost
    }
`;

module.exports = typeDefs;