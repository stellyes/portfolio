import React from 'react';
import Container from 'react-bootstrap/Container';

import posts from '../assets/documents/blogposts.json';

import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <Container className="blog-post-container">
            {posts ?
                posts.toReversed().map((post) => (
                    <Link
                        to={`/blog/${post.url}`}
                        className="blog-post-link"
                        key={post.id}
                        state={{ post }}
                    >
                        <Container className="blog-post-preview">
                            <Container>
                                <h1>{post.title}</h1>
                                <p>{post.date}</p>
                            </Container>
                            <p>{post.preview}</p>
                        </Container>
                    </Link>
                ))
                : <h1>Check back later! Nothing here yet :)</h1>
            }
        </Container>
    );
};

export default Blog;
