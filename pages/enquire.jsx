import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: "",
    timeSlot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [availableSlots, setAvailableSlots] = useState({});

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM"
  ];

  const fetchAvailability = async (selectedDate) => {
    try {
      const res = await fetch(`/api/book/bookings?date=${selectedDate}`);
      const data = await res.json();
      
      if (res.ok) {
        const availability = {};
        timeSlots.forEach(slot => {
          availability[slot] = (data.data[slot] || 0) >= 5;
        });
        setAvailableSlots(availability);
      }
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    if (e.target.name === 'date') {
      fetchAvailability(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          date: "",
          timeSlot: "",
        });
        if (formData.date) {
          fetchAvailability(formData.date);
        }
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <section className="flex-1 relative z-10 bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col items-center gap-12 lg:gap-20">
              {/* Contact Info */}
              <div className="w-full lg:w-1/2 text-center">
                <div className="">
                  <span className="mb-4 block text-base font-semibold text-orange-600">
                    Book Appointment
                  </span>
                  <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
                    Schedule Your Visit
                  </h2>
                  <p className=" text-lg leading-relaxed text-gray-600">
                    Book your physiotherapy appointment by selecting your
                    preferred date and time slot. Our expert team is ready to
                    help you on your path to recovery.
                  </p>
                </div>
              </div>

              {/* Appointment Form */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl bg-white p-8 shadow-xl sm:p-12 border border-gray-100">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-orange-600 focus:outline-none text-center"
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-orange-600 focus:outline-none text-center"
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-orange-600 focus:outline-none text-center"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={minDate}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-orange-600 focus:outline-none text-center"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() =>
                            !availableSlots[time] &&
                            handleChange({
                              target: { name: "timeSlot", value: time },
                            })
                          }
                          className={`p-3 rounded-lg text-center transition-all duration-200 ${
                            formData.timeSlot === time
                              ? "bg-orange-600 text-white shadow-md"
                              : availableSlots[time]
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                          }`}
                          disabled={availableSlots[time]}>
                          {time}
                          {availableSlots[time] && (
                            <span className="block text-xs mt-1">(Fully Booked)</span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Additional Notes (Optional)"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base transition duration-200 focus:border-orange-600 focus:outline-none resize-none text-center"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-orange-600 px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 disabled:opacity-50 shadow-md hover:shadow-lg">
                        {isSubmitting ? "Booking..." : "Book Appointment"}
                      </button>
                    </div>

                    {status && (
                      <div
                        className={`mt-4 p-4 rounded-md text-center text-sm font-medium ${
                          status.includes("Error")
                            ? "bg-red-50 text-red-600"
                            : "bg-green-50 text-green-600"
                        }`}>
                        {status}
                      </div>
                    )}
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
