import React, { useEffect, useState } from 'react';
import AppNavBar from "../components/layout/appNavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { Toaster } from "react-hot-toast";
import axios from 'axios';
import "../assets/css/about.css";

const AboutPage = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Fetch team data from the backend API
        axios.get('/api/v1/readTeam/:id')
            .then((response) => {
                const updatedMembers = response.data.map(member => ({
                    ...member,
                    images: member.images || '/assets/images/default-placeholder.jpg' // Add default image if none provided
                }));
                setTeamMembers(updatedMembers);
            })
            .catch((error) => {
                console.error('Error fetching team data:', error);
            });
    }, []);

    return (
        <div className='grid sm:grid-cols- md:grid-cols-2 lg:grid-3'>
            <AppNavBar />

            {/* About Section */}
            <section id="about" className="section-padding">
                <div className="container">
                    <h2 className="text-center" id="ab">About Us</h2>
                    <p>
                        We are a team of passionate individuals who come together to create amazing experiences and solutions for our users. Our mission is to deliver high-quality, impactful content and services. Blogs are a type of regularly updated websites that provide insight into a certain topic. At their inception, blogs were simply an online diary where people could keep a log about their daily lives on the web.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="section-padding bg-light">
                <div className="container">
                    <h2 className="text-center" id="tem">Meet Our Team</h2>
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-md-3">
                                <div className="card" >
                                    <img src={member.image} className="card-img-top" alt={member.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{member.name}</h5>
                                        <p className="card-text">{member.role}</p>
                                        <p className="card-text">{member.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Toaster position="bottom-center" />
            <Footer />
        </div>
    );
};

export default AboutPage;
