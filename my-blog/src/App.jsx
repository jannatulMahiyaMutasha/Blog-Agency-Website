import React, { useState } from "react";
import HomePage from "./pages/home-page.jsx";
import {useEffect} from "react";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BlogSection from "./components/Blog/BlogSection.jsx";
import Login from "./components/Login";


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    };
    return (
        <Router>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/" element={<BlogSection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/service" element={<ServicePage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>

            </Routes>
        </Router>

    );
};
export default App;




