import React from 'react';
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Markdown from 'react-markdown'

const Blog = () => {
    const location = useLocation();
    return (
        <Container className="blog-post">
            <Markdown>{location.state.post.body}</Markdown>
        </Container>
    );
};

export default Blog;
