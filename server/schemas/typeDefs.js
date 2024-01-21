const typeDefs = `

    type Admin {
        _id: ID!
        username: String!
        password: String!
    }

    # Custom scalar type for representing dates
    scalar Date 

    type BlogPost {
        _id: ID!
        title: String!
        body: String!
        createdAt: Date!
    }

    type Auth {
        token: ID!
        admin: Admin!
    }

    type Query {
        getAllBlogPosts: [BlogPost]
        getBlogPostById(id: ID!): BlogPost
    }

    type Mutation {
        addAdmin(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        addBlogPost(title: String!, body: String!): BlogPost
        updateBlogPost(id: ID!, title: String!, body: String!): BlogPost
        deleteBlogPost(id: ID!): BlogPost
    }
`;

module.exports = typeDefs;