import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col -mt-5">
        <Navbar />
        <section className="flex relative z-10 overflow-hidden bg-[#FFFFFF] py-12 md:py-24 mt-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Contact Info */}
              <div className="w-full lg:w-1/2">
                <div className="mb-12 lg:mb-0">
                  <span className="mb-4 block text-base font-semibold text-blue-600">
                    Contact Us
                  </span>
                  <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-800">
                    GET IN TOUCH WITH US
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-gray-600">
                    Have questions about our physiotherapy services? Need to
                    schedule an appointment? We are here to help you on your
                    journey to recovery. Reach out to us through any of the
                    methods below.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-4 bg-blue-100 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          Our Location
                        </h4>
                        <p className="mt-1 text-gray-600">
                          123 Healing Street, Wellness Center
                          <br />
                          Mumbai, Maharashtra 400001
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-4 bg-blue-100 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          Phone Number
                        </h4>
                        <p className="mt-1 text-gray-600">(+91) 98765 43210</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-4 bg-blue-100 rounded-lg">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          viewBox="0 0 24 24"
                          fill="none">
                          <path
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 6l-10 7L2 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          Email Address
                        </h4>
                        <p className="mt-1 text-gray-600">
                          contact@physioclinic.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl bg-white p-8 shadow-lg sm:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-blue-600 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-blue-600 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-blue-600 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Your Message"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-blue-600 focus:outline-none resize-none"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-lg bg-orange-600 px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
