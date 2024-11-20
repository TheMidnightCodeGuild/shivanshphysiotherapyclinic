import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Conditions from "./components/Conditions";
import Contact from "./components/Contact";
import Galleryswiper from "./components/Galleryswiper";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
const index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Conditions />
      <Galleryswiper />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default index;
