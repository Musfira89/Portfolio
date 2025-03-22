"use client";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Rightimage from "../assets/Portfolio/right.svg";
import Bgimage from "../assets/Portfolio/heroBg.png";

const Header = () => {
  return (
    <div id="home" className="relative w-full min-h-screen bg-gradient-to-r from-[#040108] to-[#160a2a] text-white">
      <Image
        src={Bgimage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      <Navbar />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-20 lg:px-32 py-16 md:py-16 relative z-10 gap-8">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-snug">
            I am <span className="text-white">Arees</span>
          </h1>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text mt-2 leading-tight"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8750f7 0%, #9b6af3 10%, #e5e7eb 100%)",
            }}
          >
            Next-Level Web Developer.
          </h2>

          <p className="text-gray-300 mt-4 text-lg sm:text-xl leading-relaxed">
            I break down complex user experience problems to create
            integrity-focused solutions that connect billions of people.
          </p>

          {/* Buttons and Icons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 space-y-4 md:space-y-0 mt-6">
            <button
              onClick={() => {
                const worksSection = document.getElementById("works");
                worksSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 sm:px-10 py-3 sm:py-4 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 flex items-center space-x-2"
            >
              <span>See Projects</span>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={Rightimage}
            alt="Gerold"
            className="w-[70%] sm:w-[120%] md:w-[85%] h-1/2 rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
