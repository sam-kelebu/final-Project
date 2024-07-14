import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/gobie.jpeg";

const BookingPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  useEffect(() => {
    // Set default start and end dates to today and tomorrow
    const today = new Date();
    setStartDate(today);
    setEndDate(new Date(today.getTime() + 86400000)); // Add one day in milliseconds
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a backend service
    console.log("Booking details:", {
      startDate,
      endDate,
      numAdults,
      numChildren,
    });
  };

  return (
    <div className="flex justify-center items-center  mt-[25vh] bg-slate-300">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Book Your Tour
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="start-date"
              className="block text-gray-700 font-bold mb-2"
            >
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              value={startDate ? startDate.toISOString().slice(0, 10) : ""}
              onChange={(e) => setStartDate(new Date(e.target.value))}
              className="w-full px-1 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="end-date"
              className="block text-gray-700 font-bold mb-2"
            >
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              value={endDate ? endDate.toISOString().slice(0, 10) : ""}
              onChange={(e) => setEndDate(new Date(e.target.value))}
              className="w-full px-1 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="num-adults"
              className="block text-gray-700 font-bold mb-2"
            >
              Number of Traveler
            </label>
            <input
              type="number"
              id="num-adults"
              min="1"
              value={numAdults}
              onChange={(e) => setNumAdults(e.target.value)}
              className="w-full px-1 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-1 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
