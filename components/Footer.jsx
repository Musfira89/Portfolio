"use client";
import React from "react";
import logo from "../assets/Portfolio/logo.webp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#06030c] text-gray-400 py-16 md:py-20 text-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <Image src={logo} alt="Logo" className="h-12 w-12 md:h-16 md:w-16" />

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base leading-relaxed">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#works" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-8">
        <p className="text-xs md:text-sm">
          © 2025 All rights reserved by{" "}
          <span className="text-white font-semibold">AressPortfolio</span>
        </p>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-purple-600 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white shadow-md hover:bg-purple-800 transition"
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer;
