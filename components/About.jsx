"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-r from-[#0a0a0f] to-[#111827] text-white py-44 px-6 md:px-16 lg:px-24 overflow-hidden flex justify-center"
    >
      {/* Floating Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center space-y-6"
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #3b82f6 0%, #67e8f9 50%, #d1d5db 100%)",
            }}
          >
            About Me
          </span>
        </h2>

        {/* Content Text */}
        <div className="text-lg text-gray-300 leading-relaxed space-y-4">
          <p>
            I am a <strong className="text-white">Full-Stack Web & Mobile Developer</strong> with
            <strong className="text-blue-400"> 5+ years</strong> of experience in scalable, high-performance application development.
          </p>

          <p>
            My expertise includes <strong className="text-white">React.js, Next.js 14, React Native, Flutter</strong> for front-end and
            <strong className="text-white"> Node.js, Express, Python</strong> for back-end solutions.
          </p>

          <p>
            I specialize in <strong className="text-white">API development</strong>, <strong className="text-white">e-commerce platforms</strong> (Shopify, WordPress),
            and <strong className="text-white">cloud solutions</strong> (AWS, GCP), ensuring top-tier security and performance.
          </p>

          <p className="text-sm text-gray-400 italic">
            "Building future-ready digital experiences that blend innovation with seamless execution."
          </p>
        </div>

        {/* Call-To-Action */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              const worksSection = document.getElementById("contact");
              worksSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 sm:px-10 py-3 sm:py-4 border border-cyan-300 text-cyan-400 rounded-md hover:bg-cyan-500 hover:text-white transition duration-300"
          >
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
