import React from 'react';
import Container from 'react-bootstrap/Container';
import { useQuery } from '@apollo/client';
import { ALL_BLOG_POSTS } from '../utils/queries';

const Blog = () => {

    const { data, loading, error } = useQuery(ALL_BLOG_POSTS);
    let posts;

    if (data) {
        posts = data.getAllBlogPosts;
    }

    // Error handling
    if (error) {
        console.error(error);
    }

    return (
        <Container>
            {error && <h1>Error</h1>}
            {loading && <h1>Loading...</h1>}
            {!posts ? 
                posts.map((post) => (
                    <Container key={post._id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </Container>
                ))
                : <h1>Check back later! Nothing here yet :)</h1>
            }
        </Container>
    );
};

export default Blog;
