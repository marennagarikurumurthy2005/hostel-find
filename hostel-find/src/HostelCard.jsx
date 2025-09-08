import React, { useState } from "react";

const HostelCard = ({ hostel }) => {
  if (!hostel) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === hostel.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? hostel.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="border border-gray-200 rounded-2xl shadow-md p-4 md:p-6 bg-white space-y-4">
      {/* Hostel Name & Rating */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          {hostel.name}
        </h2>
        {hostel.ratings && (
          <span className="text-yellow-500 font-semibold">
            ⭐ {hostel.ratings}
          </span>
        )}
      </div>

      {/* Image Carousel */}
      {hostel.images?.length > 0 && (
        <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden">
          <img
            src={hostel.images[currentIndex]}
            alt={`Hostel view ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full hover:bg-opacity-70"
          >
            ◀
          </button>
          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full hover:bg-opacity-70"
          >
            ▶
          </button>
          {/* Dots */}
          <div className="absolute bottom-2 w-full flex justify-center gap-2">
            {hostel.images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Location */}
      {hostel.location && (
        <p className="text-gray-700">
          📍{" "}
          <a
            href={hostel.location.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {hostel.location.address}
          </a>
        </p>
      )}

      {/* Price */}
      {hostel.pricePerMonth && (
        <p className="text-lg font-semibold text-green-600">
          💰 {hostel.pricePerMonth}/month
        </p>
      )}

      {/* Amenities */}
      {hostel.amenities?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {hostel.amenities.map((a, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
            >
              {a}
            </span>
          ))}
        </div>
      )}

      {/* Contact */}
      {hostel.contact && (
        <div className="text-gray-700 space-y-1">
          {hostel.contact.phone && <p>📞 {hostel.contact.phone}</p>}
          {hostel.contact.email && <p>✉️ {hostel.contact.email}</p>}
        </div>
      )}

      {/* Booking */}
      {hostel.bookingLink && (
        <a
          href={hostel.bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-black text-white font-medium py-2 px-4 rounded-xl hover:bg-gray-800 transition"
        >
          🔗 Book Now
        </a>
      )}
    </div>
  );
};

export default HostelCard;
