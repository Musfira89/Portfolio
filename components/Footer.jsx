"use client";
import React from "react";
import logo from "../assets/Portfolio/logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] text-gray-400 py-16 md:py-20 text-center relative">
      {/* Background Highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 left-12 w-16 h-16 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-6 right-12 w-20 h-20 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="flex flex-col items-center space-y-6 relative z-10">
        {/* Logo */}
        <Image src={logo} alt="Logo" className="h-12 w-12 md:h-16 md:w-16" />

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base leading-relaxed">
          <a href="#home" className="hover:text-white transition duration-300">
            Home
          </a>
          <a href="#services" className="hover:text-white transition duration-300">
            Services
          </a>
          <a href="#works" className="hover:text-white transition duration-300">
            Work
          </a>
          <a href="#contact" className="hover:text-white transition duration-300">
            Contact
          </a>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-8">
        <p className="text-xs md:text-sm">
          © 2025 All rights reserved by{" "}
          <span
            className="font-semibold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #67e8f9 100%)",
            }}
          >
            AressPortfolio
          </span>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-cyan-500 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white shadow-lg hover:bg-cyan-400 transition duration-300"
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer;
