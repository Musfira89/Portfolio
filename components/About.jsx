"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Rightimage from "../assets/Portfolio/right.svg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-r from-[#090013] to-[#12122e] text-white py-48 px-6 md:px-16 lg:px-24 overflow-hidden"
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#5a189a] opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#7b2cbf] opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Section - Floating Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-2/5 flex justify-center"
        >
          <div className="relative">
            <Image
              src={Rightimage}
              alt="About Me"
              width={400}
              height={400}
              className="object-cover rounded-[50%] w-[300px] h-[400px] shadow-lg"
            />

            {/* Floating Highlight */}
            <div className="absolute top-[-10%] left-[-10%] w-20 h-20 bg-[#5a189a] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-3/5 space-y-6 text-justify"
        >
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center md:text-left">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #5a189a 0%, #7b2cbf 50%, #d1d5db 100%)",
              }}
            >
              About Me
            </span>
          </h2>

          {/* Content Text */}
          <div className="text-lg text-gray-300 leading-relaxed">
            <p>
              I am a{" "}
              <strong className="text-white">
                Full-Stack Web & Mobile Developer
              </strong>{" "}
              with <strong className="text-purple-400">5+ years</strong> of
              experience in scalable, high-performance application development.
            </p>

            <p>
              My expertise includes{" "}
              <strong className="text-white">
                React.js, Next.js 14, React Native, Flutter
              </strong>{" "}
              for front-end and{" "}
              <strong className="text-white">Node.js, Express, Python</strong>{" "}
              for back-end solutions.
            </p>

            <p>
              I specialize in{" "}
              <strong className="text-white">API development</strong>,{" "}
              <strong className="text-white">e-commerce platforms</strong>{" "}
              (Shopify, WordPress), and{" "}
              <strong className="text-white">cloud solutions</strong> (AWS,
              GCP), ensuring top-tier security and performance.
            </p>

            <p className="text-sm text-gray-400 italic">
              "Building future-ready digital experiences that blend innovation
              with seamless execution."
            </p>
          </div>

          {/* Call-To-Action */}
          <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 space-y-4 md:space-y-0 mt-6">
            <button
              onClick={() => {
                const worksSection = document.getElementById("contact");
                worksSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 sm:px-10 py-3 sm:py-4 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-600 hover:text-white transition duration-300 flex items-center space-x-2"
            >
              <span>Contact Me</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
