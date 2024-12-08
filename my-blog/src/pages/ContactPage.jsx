import React, { useState } from "react";
import AppNavBar from "../components/layout/AppNavBar.jsx"; // Menu Component
import Footer from "../components/layout/Footer.jsx"; // Footer Component
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import "../assets/css/contact.css"; // Add custom styles here

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send form data to the backend API
            const response = await axios.post("/api/v1/contact", formData);
            toast.success("Your message has been sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Reset form
        } catch (error) {
            console.error("Error submitting contact form:", error);
            toast.error("Failed to send your message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='grid sm:grid-cols- md:grid-cols-2 lg:grid-3'>
            <AppNavBar />

            {/* Contact Form Section */}
            <section id="contact" className="section-padding">
                <div className="container">
                    <h2 className="text-center">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-control"
                                rows="5"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </section>

            <Toaster position="bottom-center" />
            <Footer />
        </div>
    );
};

export default ContactPage;
