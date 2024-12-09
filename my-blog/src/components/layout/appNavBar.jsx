import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/blogagencylogo.webp";

const AppNavBar = ({ isLogin = () => false, onLogout }) => {
    const [SearchKeyword, SetSearchKeyword] = useState("");

    return (
        <nav className="navbar sticky-top shadow-sm bg-white navbar-expand-lg navbar-light m-0 py-3">
            <div className="container">
                {/* Brand Logo */}
                <Link className="navbar-brand" to="/">
                    <img
                        className="img-fluid"
                        src={logo}
                        alt="Blog Agency Logo"
                        style={{ width: "80px", height: "auto" }}
                    />
                </Link>

                {/* Navbar Toggle Button for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav06"
                    aria-controls="nav06"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="nav06">
                    <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                        <li className="nav-item me-4">
                            <Link className="btn ms-2 btn-light" to="/">
                                <i className="bi bi-house"></i> Home
                            </Link>
                            <Link className="btn ms-2 btn-light" to="/about">
                                About
                            </Link>
                            <Link className="btn ms-2 btn-light" to="/blog">
                                Blog
                            </Link>
                            <Link className="btn ms-2 btn-light" to="/service">
                                Services
                            </Link>
                            <Link className="btn ms-2 btn-light" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Login/Logout and Profile Buttons */}
                <div className="d-flex">
                    {isLogin() ? (
                        <>
                            <button onClick={onLogout} className="btn ms-3 btn-secondary">
                                Logout
                            </button>
                            <Link className="btn ms-3 btn-secondary" to="/profile">
                                Profile
                            </Link>
                        </>
                    ) : (
                        <Link className="btn ms-3 btn-secondary" to="/login">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default AppNavBar;
