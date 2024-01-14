import { gql } from '@apollo/client';

export const ADD_BLOG_POST = gql`
    mutation addBlogPost($title: String!, $body: String!) {
        addBlogPost(title: $title, body: $body) {
            _id
            title
            body
        }
    }
`

export const UPDATE_BLOG_POST = gql`
    mutation updateBlogPost($blogPostId: ID!, $title: String, $body: String) {
        updateBlogPost(blogPostId: $blogPostId, title: $title, body: $body) {
            _id
            title
            body
        }
    }
`

export const DELETE_BLOG_POST = gql`
    mutation deleteBlogPost($blogPostId: ID!) {
        deleteBlogPost(blogPostId: $blogPostId) {
            _id
            title
            body
        }
    }
`

export const LOGIN = gql`
    mutation login($input: String!) {
        login(input: $input)
    }
`

export const VERIFY = gql`
    mutation verify {
        verify
    }
`