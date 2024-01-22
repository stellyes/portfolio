const typeDefs = `
    # Custom scalar type for representing dates
    scalar Date 

    type BlogPost {
        _id: ID!
        title: String!
        body: String!
        createdAt: Date!
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
