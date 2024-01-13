import React from 'react';
import Container from 'react-bootstrap/Container';
import { useQuery } from '@apollo/client';
import { ALL_BLOG_POSTS } from '../utils/queries';
import { Link } from 'react-router-dom';

const Blog = () => {
    // Query for all blog posts
    const { data, loading, error } = useQuery(ALL_BLOG_POSTS);
    let posts;

    if (data) {
        posts = data.getAllBlogPosts;
    }

    // Error handling
    if (error) {
        console.error(error);
    }

    const generatePreview = (body) => {
        body = body.replace("# ", "").replace("## ", "").replace("Description", "");
        const preview = body.split(' ').slice(0, 30).join(' ');
        return preview  + '...';
    }

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
    }


    return (
        <Container className="blog-post-item">
            {error && <h1 className="blog-load-error">Error</h1>}
            {loading && <h1 className="blog-loading">Loading...</h1>}
            {!loading && posts ? 
                posts.map((post) => (
                    <Link 
                        to={`/blog/${post._id}`} 
                        className="blog-post-link" 
                        key={post._id}
                        state={{ post }}
                    >
                        <Container className="blog-post-preview">
                            <Container>
                                <h1>{post.title}</h1>
                                <p>{formatDate(post.createdAt)}</p>
                            </Container>
                            <p>{generatePreview(post.body)}</p>
                        </Container>
                    </Link>
                ))
                : <h1>Check back later! Nothing here yet :)</h1>
            }
        </Container>
    );
};

export default Blog;
