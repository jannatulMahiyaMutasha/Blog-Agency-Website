import React from 'react';
import AppNavBar from "./AppNavBar.jsx";
import Footer from "./Footer.jsx";
import { Toaster } from "react-hot-toast";
import HeroSection from "../layout/HeroSection";
import BlogPage from "../../pages/BlogPage.jsx";
import ChoicePage from "../../pages/ChoicePage.jsx"; // Corrected relative path

const Layout = (props) => {
    return (
        < >
            <AppNavBar />
            <HeroSection />
            {props.children} {/* Render child components here */}
            <BlogPage style={{ paddingBottom: "50px" }} /> {/* Corrected inline style */}
            <ChoicePage />
            <Toaster position="bottom-center" />
            <Footer />
        </>
    );
};

export default Layout;
