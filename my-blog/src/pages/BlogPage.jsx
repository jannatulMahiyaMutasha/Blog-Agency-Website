import React from 'react';
import AppNavBar from "../components/layout/AppNavBar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { Toaster } from "react-hot-toast";
import BlogSection from "../components/Blog/BlogSection.jsx";



const BlogPage = () => {
    return (
        <div className='grid sm:grid-cols- md:grid-cols-2 lg:grid-3'>

            <AppNavBar></AppNavBar>
            <BlogSection></BlogSection>
            <Footer></Footer>

        </div>
    );
};

export default BlogPage;
