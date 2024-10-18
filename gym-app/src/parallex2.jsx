import React, { useEffect } from "react";
import "./parallex2.css";

const Parallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      document.querySelectorAll(".image").forEach((image, index) => {
        const speed = index * 0.5 + 0.5; // Different speed for each image
        image.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
  }, []);

  return (
    <section className="parallax">
      <div className="image" id="image1"></div>
      <div className="image" id="image2"></div>
      <div className="image" id="image3"></div>
    </section>
  );
};

export default Parallax;
