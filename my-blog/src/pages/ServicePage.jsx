import React, { useEffect, useState } from "react";
import AppNavBar from "../components/layout/AppNavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const ServicePage = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch services from the backend
        const fetchServices = async () => {
            try {
                const response = await axios.get("/api/v1/readService/:id");
                setServices(response.data);
            } catch (err) {
                setError("Failed to fetch services. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className='grid sm:grid-cols- md:grid-cols-2 lg:grid-3'>
            <AppNavBar />

            {/* Menu Section */}
            <section id="menu" className="bg-dark text-white py-4">
                <div className="container">
                    <div className="text-center">
                        <h3 className="mb-3">Our Services Menu</h3>
                        <nav>
                            <ul className="list-inline">
                                {services.map((service, index) => (
                                    <li key={index} className="list-inline-item">
                                        <a
                                            href={`#${service.title?.toLowerCase().replace(/\s+/g, "-")}`}
                                            className="text-white"
                                        >
                                            {service.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Service Section */}
            <section id="services" className="section-padding">
                <div className="container">
                    <h2 className="text-center">Our Services</h2>
                    {loading ? (
                        <p className="text-center">Loading services...</p>
                    ) : error ? (
                        <p className="text-center text-danger">{error}</p>
                    ) : (
                        <div className="row">
                            {services.map((service, index) => (
                                <div key={index} className="col-md-4" id={service.title?.toLowerCase().replace(/\s+/g, "-")}>
                                    <div className="service-item">

                                        <h4>{service.title}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Toaster position="bottom-center" />
            <Footer />
        </div>
    );
};

export default ServicePage;
