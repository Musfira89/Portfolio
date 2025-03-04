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
        <nav className="flex flex-wrap justify-center space-x-6 text-sm md:text-base leading-relaxed">
          {["About", "Services", "Portfolios", "Contact"].map((item, index) => (
            <a key={index} href="#" className="hover:text-white transition">
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright (Positioned at the bottom) */}
      <div className="mt-8">
        <p className="text-xs md:text-sm">
          © 2024 All rights reserved by{" "}
          <span className="text-white font-semibold">AnasPortfolio</span>
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
