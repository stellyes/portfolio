import React from 'react';
import { Container } from 'react-bootstrap';

const blogPosts = [
    {
        title: "Blog Post 1",
        body: `# That's One Way: Creating a blog with React.js and MongoDB 

*How do the two technologies connect? How do you render a fully formatted, headed, spaced blog post if you're storing it as plain text?*

**Here's my solution to this problem.**`,
        date: "2021-01-01"
    }
]

const Blog = () => {
    return (
        <Container>
            <div>Coming soon!</div>
        </Container>
    );
};

export default Blog;
