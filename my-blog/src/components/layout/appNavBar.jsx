import React, { useEffect, useState } from "react";
import "../layout/HeroSection.jsx"
import Footer from "../layout/footer.jsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import "../../assets/css/nav.css"; // Link to CSS for styling

const AppNavBar = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blog data dynamically from the backend API
        axios
            .get("/api/v1/readBlog/:id")
            .then((response) => {
                setBlogs(response.data.slice(0, 6)); // Show only 6 items
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
            });
    }, []);

    return (
        <div>
            <AppNavBar />

            {/* Hero Section */}
            <section id="hero" className="hero-section">
                <div className="container text-center">
                    <h1>Welcome to Our Blog Agency</h1>
                    <p>Delivering creative solutions and insights for your business.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blogs" className="section-padding">
                <div className="container">
                    <h2 className="text-center">Our Latest Blogs</h2>
                    <div className="row">
                        {blogs.map((blog, index) => (
                            <div key={index} className="col-md-4">
                                <div className="blog-card">
                                    <img
                                        src={blog.image || "/assets/images/default-blog.jpg"}
                                        alt={blog.title}
                                        className="img-fluid"
                                    />
                                    <h4>{blog.title}</h4>
                                    <p>{blog.description.slice(0, 6)}...</p>
                                    <button className="btn btn-link">Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Section */}
            <section id="custom" className="custom-section bg-light section-padding">
                <div className="container">
                    <h2 className="text-center">Why Choose Us?</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Creative Content</h3>
                            <p>
                                Our content is crafted to provide engaging and valuable
                                insights.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h3>Expert Team</h3>
                            <p>
                                We are a team of professionals dedicated to achieving results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Toaster position="bottom-center" />
            <Footer />
        </div>
    );
};

export default AppNavBar;
