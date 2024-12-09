import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogSection = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);

    // Check login status
    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem("token");
            setIsLoggedIn(Boolean(token));
        };
        checkLoginStatus();
    }, []);

    // Fetch blogs
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const endpoint = isLoggedIn
                    ? "/api/v1/readBlog" // Fetch all blogs
                    : "/api/v1/readBlog?limit=6"; // Fetch limited blogs
                const response = await axios.get(endpoint, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                setBlogPosts(response.data || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, [isLoggedIn]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Our Blogs</h2>
            <div className="row">
                {blogPosts.length === 0 ? (
                    <p className="text-center">No blogs available.</p>
                ) : (
                    blogPosts.map((post, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img
                                    src={post.image || "https://via.placeholder.com/150"}
                                    className="card-img-top"
                                    alt={post.title || "Blog Image"}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title || "Untitled Blog"}</h5>
                                    <p className="card-text">
                                        {post.content
                                            ? `${post.content.slice(0, 100)}...`
                                            : "No content available."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BlogSection;
