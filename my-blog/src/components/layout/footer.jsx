import React from 'react';
import { Link } from "react-router-dom";
import pay from "../../assets/images/pay.png"; // if you want to use this image, make sure it's used or removed

const Footer = () => {
    return (
        <div className='grid sm:grid-cols- md:grid-cols-2 lg:grid-3'>
            {/* Footer Content */}
            <div className="bg-dark py-3 text-center">
                <div className="container-fluid text-white p-2">
                    <div className="container">
                        <div className="row justify-content-around">
                            {/* Social Media Icons */}
                            <div className="col-md-6">
                                <span className="float-end">
                                    <span className="bodySmall mx-2">
                                        <a href="https://wa.me/YourPhoneNumber" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-whatsapp" style={{ color: "white" }}></i>
                                        </a>
                                    </span>
                                    <span className="bodySmall mx-2">
                                        <a href="https://youtube.com/YourChannel" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-youtube" style={{ color: "white" }}></i>
                                        </a>
                                    </span>
                                    <span className="bodySmall mx-2">
                                        <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-facebook" style={{ color: "white" }}></i>
                                        </a>
                                    </span>
                                    <span className="bodySmall mx-2">
                                        <a href="mailto:youremail@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-envelope" style={{ color: "white" }}></i>
                                        </a>
                                    </span>
                                </span>
                            </div>

                            {/* Contact Info (Phone) */}
                            <div className="col-md-6">
                                <p className="bodySmall">
                                    <i className="bi bi-telephone" style={{ color: "white" }}></i> Call us: <a href="#" className="text-white">+880-1234567892</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="text-white bodySmall">All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
