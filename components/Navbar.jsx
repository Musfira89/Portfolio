"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/Portfolio/logo.webp";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 lg:px-28 py-6 md:py-10 relative z-10">
        {/* Logo & Email */}
        <div className="flex items-center space-x-4 md:space-x-9">
          <Image src={logo} alt="Logo" className="h-12 w-12 md:h-14 md:w-14" />
          <a
            href="mailto:areesshah678@gmail.com"
            className="hidden sm:block text-sm md:text-md font-medium text-gray-300 hover:text-cyan-400 transition duration-300"
          >
            areesshah678@gmail.com
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-white text-sm">
          {navLinks.map((item, index) => (
            <li key={index} className="relative cursor-pointer group">
              <a href={item.href} className="hover:text-cyan-400 transition">
                {item.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a
          href="https://www.upwork.com/freelancers/~0134974fb98f3f02cd"
          className="hidden md:block px-6 py-3 text-white rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#67e8f9] hover:from-[#67e8f9] hover:to-[#3b82f6] transition-all duration-300"
        >
          See Upwork
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none text-white"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0a0a0f] text-white flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400 transition"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Logo */}
        <Image src={logo} alt="Logo" className="h-16 w-16" />

        {/* Email */}
        <a
          href="mailto:areesshah678@gmail.com"
          className="text-sm text-gray-300 hover:text-cyan-400 cursor-pointer transition duration-300"
        >
          areesshah678@gmail.com
        </a>

        {/* Navigation Links */}
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-lg font-medium cursor-pointer hover:text-cyan-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}

        {/* Button */}
        <a
          href="https://www.upwork.com/freelancers/~0134974fb98f3f02cd"
          className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#67e8f9] hover:from-[#67e8f9] hover:to-[#3b82f6] transition-all duration-300 shadow-lg"
        >
          See Upwork
        </a>
      </div>
    </>
  );
};

export default Navbar;
