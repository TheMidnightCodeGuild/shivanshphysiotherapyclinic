import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Conditions from "./components/Conditions";
import Contact from "./components/Contact";
import Galleryswiper from "./components/Galleryswiper";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Videos from "./components/Videos";
import Banner2 from "./components/Banner2";
import Videotesti from "./components/Videotesti";
import Contactus from "./enquire";
import Cont from "./components/Cont";
import Aboutus from "./components/Aboutus";
const index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Aboutus />
      <About />
      <Conditions />
      <Galleryswiper />
      <Contact />
      {/* <Videos /> */}
      {/* <Banner2 /> */}
      {/* <Videotesti /> */}
      <Testimonial />

      <Cont />
      <Footer />
    </div>
  );
};

export default index;
