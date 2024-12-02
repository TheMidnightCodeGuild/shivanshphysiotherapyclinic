import React, { useState, useEffect } from 'react'

const AdminPanel = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [bookingDetails, setBookingDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('enquiries');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [enquiriesRes, bookingsRes] = await Promise.all([
          fetch('/api/forms/getEnquiry'),
          fetch('/api/book/getBookings?date=' + selectedDate)
        ]);

        if (!enquiriesRes.ok || !bookingsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const enquiriesData = await enquiriesRes.json();
        const bookingsData = await bookingsRes.json();

        setEnquiries(enquiriesData);
        setBookings(bookingsData.data || {});
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate]);

  const fetchBookingDetails = async (timeSlot) => {
    try {
      const res = await fetch(`/api/book/getBookingDetails?date=${selectedDate}&timeSlot=${timeSlot}`);
      if (!res.ok) throw new Error('Failed to fetch booking details');
      const data = await res.json();
      setBookingDetails(data.bookings || []);
      setSelectedTimeSlot(timeSlot);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="mb-6">
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'enquiries' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('enquiries')}
          >
            Enquiries
          </button>
          <button 
            className={`px-4 py-2 rounded ${activeTab === 'bookings' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('bookings')}
          >
            Bookings
          </button>
        </div>
      </div>

      {activeTab === 'enquiries' && (
        <div className="grid gap-4">
          {enquiries.map((enquiry) => (
            <div key={enquiry._id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Name:</h3>
                  <p>{enquiry.name}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>{enquiry.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Mobile:</h3>
                  <p>{enquiry.mobile}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Date:</h3>
                  <p>{new Date(enquiry.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Message:</h3>
                <p className="whitespace-pre-wrap">{enquiry.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'bookings' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Select Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-4">
            {Object.entries(bookings).length > 0 ? (
              Object.entries(bookings).map(([timeSlot, count]) => (
                <div key={timeSlot} className="bg-white p-6 rounded-lg shadow-md">
                  <div 
                    className="grid grid-cols-2 gap-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => fetchBookingDetails(timeSlot)}
                  >
                    <div>
                      <h3 className="font-semibold">Time Slot:</h3>
                      <p>{timeSlot}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Number of Bookings:</h3>
                      <p>{count}</p>
                    </div>
                  </div>
                  {selectedTimeSlot === timeSlot && bookingDetails.length > 0 && (
                    <div className="mt-4 border-t pt-4">
                      <h4 className="font-semibold mb-3">Booking Details:</h4>
                      {bookingDetails.map((booking, index) => (
                        <div key={booking._id} className="mb-3 p-3 bg-gray-50 rounded">
                          <p><span className="font-medium">Name:</span> {booking.name}</p>
                          <p><span className="font-medium">Email:</span> {booking.email}</p>
                          <p><span className="font-medium">Phone:</span> {booking.phone}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">No bookings found for this date</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPanel