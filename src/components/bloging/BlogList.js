import React from 'react';
import BlogPost from './BlogPost';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const BlogList = ({blogPosts}) => {
    if (!blogPosts || blogPosts.length === 0) {
        // You can render a loading indicator or a message here
        return <p>Loading...</p>;
    }
    return (
            <Carousel showStatus={true} showThumbs={false} showIndicators={false} >
                {blogPosts.map((post) => (
                    <div key={post.id} className='center-div' >
                        {/*<Link to={`/blog/${post.id}`}>*/}
                        <BlogPost post={post}/>
                        {/*</Link>*/}
                    </div>
                ))}
            </Carousel>
    );
};

export default BlogList;