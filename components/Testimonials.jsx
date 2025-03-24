"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      title: "UPWORK CLIENT",
      quote:
        "Outstanding work! The freelancer delivered exactly what was agreed upon, on time, with great quality and attention to detail.",
      name: "Satisfied Upwork Client",
      project: "React SPA Project - $15 (5.0★)",
    },
    {
      title: "UPWORK CLIENT",
      quote:
        "Arees Shah is a genius! Delivered everything with high quality and great design sense. Extremely reliable, quick, and efficient. Will definitely rehire.",
      name: "Satisfied Upwork Client",
      project: "WordPress UI Fixes – 5.0★",
    },
    {
      title: "LOCAL CLIENT – KARACHI",
      quote:
        "Absolutely impressed with the professionalism and skills. Arees developed a responsive React website for our startup that exceeded expectations. Highly recommended!",
      name: "Faisal Ahmed",
      project: "Startup Founder, Karachi",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-r from-[#0a0a0f] to-[#111827] text-white py-36 px-6 md:px-20 relative"
    >
      {/* Background Highlights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-2xl md:text-5xl font-extrabold">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #67e8f9 100%)",
              }}
            >
              Client Reviews.
            </span>
          </h2>
          <p className="text-gray-300 mt-3 text-xs md:text-sm mb-16">
            Empowering people in a new digital journey with my super services.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#0f0f1a] w-full md:w-[30%] p-8 rounded-2xl border border-cyan-500 transition-all duration-300 max-w-sm ${
                activeIndex === index
                  ? "shadow-[0px_0px_12px_rgba(103,232,249,0.6)] scale-105"
                  : "hover:shadow-[0px_0px_8px_rgba(103,232,249,0.4)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-400 font-semibold">{testimonial.title}</h3>
                <FontAwesomeIcon icon={faQuoteLeft} className="text-cyan-400 text-xl" />
              </div>
              <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
                “{testimonial.quote}”
              </p>
              <h4 className="font-bold text-white mt-5 text-lg">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;