// src/components/layout/HeroSection.jsx
import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImage from "../../assets/images/slider.webp";  // Update with the correct image path
import sliderImage1 from "../../assets/images/slider1.webp";
import sliderImage2 from "../../assets/images/slider2.jpg";
import  "../../assets/css/slider.css"
import "../../assets/css/imageslider.css"

const HeroSection = () => {
    return (
        <Carousel className='grid sm:grid-cols- md:grid-cols-2 lg:grid-3'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to Our Blog</h3>
                    <p>Your daily dose of awesome content.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* You can add more slides as needed */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImage1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Discover Inspiring Stories</h3>
                    <p>Explore insights, ideas, and creativity every day.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={sliderImage2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Your Gateway to Knowledge</h3>
                    <p>Stay informed with the latest trends and articles.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroSection;
