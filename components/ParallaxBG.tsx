"use client";

import { useEffect, useRef, useState } from "react";

const ParallaxBackground = ({ children }) => {
    const parallaxRef = useRef(null);
    const [backgroundPosition, setBackgroundPosition] = useState("top");

    const imageHeight = 2000; // Replace with your image height in pixels

    const handleScroll = () => {
        if (parallaxRef.current) {
            const scrollTop = window.pageYOffset;
            const viewportHeight = window.innerHeight;
            const contentHeight = document.documentElement.scrollHeight;

            // Calculate the max scrollable distance
            const maxScrollableDistance = contentHeight - viewportHeight;

            // Calculate the scroll percentage
            const scrollPercentage = scrollTop / maxScrollableDistance;

            // Calculate the background offset based on the scroll percentage
            const backgroundOffset = scrollPercentage * (imageHeight - viewportHeight);

            setBackgroundPosition(`center ${-backgroundOffset}px`);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initialize position on load
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={parallaxRef}
            style={{
                backgroundImage: "url('/images/Hackathon_2024.png')",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: backgroundPosition,
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
        >
            {children}
        </div>
    );
};

export default ParallaxBackground;