import React from "react";
import slide from "../assets/slide.avif";

const Slide = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 pt-10">
        
        <div className="w-full relative overflow-hidden shadow-md">
          <img 
            src={slide} 
            alt="Slide" 
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40">
            <h1 className="text-4xl font-semibold">
              Discover Your Perfect Stay
            </h1>
            <p className="mt-3 text-lg">
              Book handpicked homes for work, travel and relaxation
            </p>

            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">
              Start Booking
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Slide;
