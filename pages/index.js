import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Conditions from "./components/Conditions";
import Contact from "./components/Contact";
import Galleryswiper from "./components/Galleryswiper";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Conditions />
      <Contact />
      <Galleryswiper />
      <Testimonial />
      <Footer />
    </>
  );
};

export default index;
