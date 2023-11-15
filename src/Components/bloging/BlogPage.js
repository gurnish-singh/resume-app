import React, {useEffect, useState} from 'react';
import BlogList from "./BlogList";

const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Define the URL of your backend API
        const apiUrl = 'https://spring-articles.onrender.com/api/v1/articles/all'; // Replace with your API URL

        // Fetch data from the backend API
        fetch(apiUrl, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Update the blogPosts state with the fetched data
                setBlogPosts(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // The empty dependency array ensures that this effect runs only once when the component mounts


    return (
        <div className="blog-list-container">
            <h2 className="blog-list-heading">Latest Blog Posts</h2>
            {/* Render your blog posts here */}
            <BlogList blogPosts={blogPosts}/>
        </div>
    );
};

export default BlogPage;
