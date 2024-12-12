import React, { useState } from "react";
import { PropagateLoader } from "react-spinners";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/forms/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="text-gray-600 bg-[#FAD5A5] relative min-h-screen py-4 sm:py-8 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pt-32 sm:pt-0">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-between items-start">
          {/* Company Details Section */}
          <div className="w-full lg:w-2/5">
            <div className=" p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                CONTACT <span className="text-orange-500">DETAILS</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Vivekanand Colony
                    <br />
                    Ujjain, Madhya Pradesh
                    <br />
                    India - 456010
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">+91-9770353270</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600">naveen.moghi@yahoo.in</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 8:00 AM - 8:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                GET IN <span className="text-orange-500">TOUCH</span> WITH US
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
                We&apos;d love to hear from you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs sm:text-sm text-gray-600 block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs sm:text-sm text-gray-600 block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="text-xs sm:text-sm text-gray-600 block mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs sm:text-sm text-gray-600 block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 resize-none"
                    required></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center min-h-[40px] sm:min-h-[44px] text-xs sm:text-sm"
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    <PropagateLoader
                      color="white"
                      size={8}
                      speedMultiplier={0.7}
                    />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {status && (
                <div
                  className={`mt-4 p-2 sm:p-3 rounded-md text-center text-xs sm:text-sm ${
                    status.includes("Error")
                      ? "bg-red-50 text-red-600"
                      : "bg-green-50 text-green-600"
                  }`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
