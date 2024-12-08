import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/blog.css";

const BlogSection = () => {
    // State to track if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);

    // UseEffect to simulate checking login status
    useEffect(() => {
        // Simulate fetching login status
        const checkLoginStatus = () => {
            const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
            setIsLoggedIn(isAuthenticated);
        };
        checkLoginStatus();
    }, []);

    // Fetch blogs based on login status
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const endpoint = isLoggedIn
                    ? "/api/v1/readBlog" // All blogs for logged-in users
                    : "/api/v1/readBlog?limit=6"; // Limited blogs for non-logged-in users

                const response = await axios.get(endpoint);
                setBlogPosts(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, [isLoggedIn]);

    return (
        <div className='grid sm:grid-cols- md:grid-cols-2 lg:grid-3'>
            {/* Blog Section */}
            <section id="blog" className="section-padding">
                <div className="container">
                    <h2 className="text-center mb-5">Our Latest Blogs</h2>
                    <div className="row">
                        {blogPosts.length === 0 ? (
                            <p>No blogs found!</p>
                        ) : (
                            blogPosts.map((post, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            src={post.image}
                                            className="card-img-top"
                                            alt={post.title}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.content}</p>
                                        </div>

                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Simulated Login/Logout Button */}
                    <div className="text-center mt-4">
                        {!isLoggedIn ? (
                            <button
                                onClick={() => {
                                    setIsLoggedIn(true);
                                    localStorage.setItem("isLoggedIn", "true");
                                }}
                                className="btn btn-primary"
                            >
                                Log In to See More
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    localStorage.setItem("isLoggedIn", "false");
                                }}
                                className="btn btn-secondary"
                            >
                                Log Out
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogSection;
