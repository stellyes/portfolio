import { gql } from '@apollo/client';

export const GET_BLOG_POST = gql`
    query getBlogPostById ($blogPostId: ID!) {
        blogPost(blogPostId: $blogPostId) {
            _id
            title
            body
        }
    }
`;

export const ALL_BLOG_POSTS = gql`
    query getAllBlogPosts {
        getAllBlogPosts {
            _id
            title
            body
        }
    }   
`;