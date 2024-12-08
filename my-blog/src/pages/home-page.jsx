import React from 'react';

import BlogSection from "../components/Blog/BlogSection.jsx";
import ChoicePage from "./ChoicePage.jsx";
import Footer from "../components/layout/footer.jsx";
import AppNavBar from "../components/layout/appNavBar.jsx";
import HeroSection from "../components/layout/HeroSection.jsx";


const HomePage = () => {
    return (
     <>
         <AppNavBar></AppNavBar>
         <HeroSection></HeroSection>
        <BlogSection></BlogSection>
         <ChoicePage></ChoicePage>
             <Footer></Footer>
     </>



);
};

export default HomePage;

