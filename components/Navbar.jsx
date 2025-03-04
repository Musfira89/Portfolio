"use client";
import React from "react";
import logo from "../assets/Portfolio/logo.webp";
import Bgimage from "../assets/Portfolio/image.webp";
import Image from "next/image";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-[#080313] to-[#160a2a] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 lg:px-28 py-6 md:py-10 relative z-10">
        {/* Logo & Email */}
        <div className="flex items-center space-x-4 md:space-x-9">
          <Image src={logo} alt="Logo" className="h-12 w-12 md:h-14 md:w-14" />
          <span className="hidden sm:block text-sm md:text-md font-medium">
            anasmairaj784@gmail.com
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white text-sm">
          {[
            "Services",
            "Works",
            "Resume",
            "Skills",
            "Testimonials",
            "Contact",
          ].map((item, index) => (
            <li key={index} className="relative cursor-pointer group">
              <span className="hover:text-white">{item}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-800 transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <button className="hidden md:block px-6 py-3 text-white rounded-xl bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:from-[#9b6af7] hover:to-[#3b1b6b] transition-all duration-300">
          Hire Me!
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#080313] text-white flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden z-50`}
      >
        {/* Close Button (Inside Navbar) */}
        <button
          className="absolute top-6 right-6 text-white text-3xl hover:text-gray-400 transition"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Logo */}
        <Image src={logo} alt="Logo" className="h-16 w-16" />

        {/* Email with better spacing */}
        <span className="text-sm text-gray-300 mb-4">anasmairaj784@gmail.com</span>

        {/* Navigation Links */}
        {[
          "Services",
          "Works",
          "Resume",
          "Skills",
          "Testimonials",
          "Contact",
        ].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-lg font-medium cursor-pointer hover:text-purple-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}

        {/* Hire Me Button */}
        <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#8750f7] to-[#2a1454] hover:from-[#9b6af7] hover:to-[#3b1b6b] transition-all duration-300 shadow-lg">
          Hire Me!
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-20 lg:px-32 py-16 md:py-16 relative z-10 gap-8">
        {/* Left Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-snug">
            I am <span className="text-white">Anas</span>
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
            {/* Download CV Button */}
            <button className="px-8 sm:px-10 py-3 sm:py-4 border border-purple-500 text-purple-500 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 flex items-center space-x-2">
              <span>Download CV</span>
              <i className="fas fa-download"></i>
            </button>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-purple-500 rounded-full text-purple-500 hover:bg-purple-600 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-purple-500 rounded-full text-purple-500 hover:bg-purple-600 hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-purple-500 rounded-full text-purple-500 hover:bg-purple-600 hover:text-white transition duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Section with Original Size for Large Screens */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={Bgimage}
            alt="Gerold"
            className="w-[70%] sm:w-[120%] md:w-[70%] h-1/2 rounded-xl object-cover shadow-lg rotate-[4.29deg] hover:rotate-0 transition-all duration-300 border-2 border-purple-600"
          />
        </div>
      </div>

      <div className="w-full py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <h2 className="text-5xl font-bold">14</h2>
            <p className="text-lg text-gray-300">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">50+</h2>
            <p className="text-lg text-gray-300">Projects Completed</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">1.5K</h2>
            <p className="text-lg text-gray-300">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold">14</h2>
            <p className="text-lg text-gray-300">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
