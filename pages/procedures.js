import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
const Procedures = () => {
  const procedures = [
    {
      title: "Manual Therapy",
      description:
        "Hands-on techniques to manipulate joints and soft tissues, improving mobility and reducing pain.",
      image: "/images/manual.jpg",
    },
    {
      title: "Exercise Therapy",
      description:
        "Customized exercise programs to strengthen muscles, improve flexibility and restore function.",
      image: "/images/exercise.jpg",
    },
    {
      title: "Electrotherapy",
      description:
        "Using electrical stimulation to reduce pain, improve circulation and promote healing.",
      image: "/images/electro.webp",
    },
    {
      title: "Sports Rehabilitation",
      description:
        "Specialized treatment for sports injuries to help athletes return to peak performance.",
      image: "/images/sports.png",
    },
    {
      title: "Neurological Rehabilitation",
      description:
        "Treatment for conditions affecting the nervous system, improving movement and coordination.",
      image: "/images/neuro.jpg",
    },
    {
      title: "Posture Correction",
      description:
        "Assessment and treatment to improve posture and prevent musculoskeletal problems.",
      image: "/images/posture.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Our Procedures
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We offer a comprehensive range of physiotherapy treatments
              tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-52 scale-95 relative">
                  <Image
                    src={procedure.image}
                    alt={procedure.title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {procedure.title}
                  </h3>
                  <p className="text-gray-600">{procedure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Procedures;
