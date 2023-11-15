
import React from 'react';
import styled from 'styled-components';

const BlogPostCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  p {
    font-size: 1rem;
  }

  a {
    display: block;
    color: #007bff;
    text-decoration: none;
    margin-top: 10px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const BlogPost = ({ post }) => {
    return (
        <BlogPostCard>
            <img src={post.image} alt={post.name} />
            <h2>{post.name}</h2>
            <p>{post.content}</p>
            <a href={`/blog/${post.id}`}>Read more</a>
        </BlogPostCard>
    );
};

export default BlogPost;
