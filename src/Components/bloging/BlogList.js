// components/BlogList.js
import React from 'react';
import BlogPost from './BlogPost';
// components/BlogList.js
import styled from 'styled-components';

const BlogListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const BlogList = ({ blogPosts }) => {
    return (
        <BlogListContainer>
            {blogPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </BlogListContainer>
    );
};

export default BlogList;
