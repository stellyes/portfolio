const { gql } = require('apollo-server-express');

const typeDefs = gql`
    # Custom scalar type for representing dates
    scalar Date 

    type BlogPost {
        _id: ID!
        title: String!
        body: String!
        createdAt: Date!
    }

    type User {
        _id: ID!
        username: String!
        password: String!
    }

    type AuthPayload {
        token: String!
        user: User
    }

    type Query {
        getAllBlogPosts: [BlogPost]
        getBlogPostById(id: ID!): BlogPost
    }

    type Mutation {
        register(username: String!, password: String!): AuthPayload
        login(username: String!, password: String!): AuthPayload
        addBlogPost(title: String!, body: String!): BlogPost
        updateBlogPost(id: ID!, title: String!, body: String!): BlogPost
        deleteBlogPost(id: ID!): BlogPost
    }
`;

module.exports = typeDefs;