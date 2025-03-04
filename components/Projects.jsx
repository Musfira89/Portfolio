"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import project1 from "../assets/ProjectsImg/Web0.webp";
import project2 from "../assets/ProjectsImg/Web1.webp";
import project3 from "../assets/ProjectsImg/Web2.webp";
import project4 from "../assets/ProjectsImg/Web3.webp";

const projects = [
  { id: 1, image: project1, category: "UX/UI" },
  { id: 2, image: project2, category: "Branding" },
  { id: 3, image: project3, category: "Apps" },
  { id: 4, image: project4, category: "UX/UI" },
];

const categories = ["All", "UX/UI", "Branding", "Apps"];

const RecentWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-[#080313] text-white py-22 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-[80vw] h-[80vh] bg-purple-500 opacity-20 blur-3xl rounded-full absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content Wrapper (z-10 to ensure it's above the glow) */}
      <div className="relative z-10 text-center mb-10 sm:mb-16 mt-8 sm:mt-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #8750f7 0%, #9b6af3 10%, #e5e7eb 100%)",
            }}
          >
            My Recent Works
          </span>
        </h2>

        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm sm:text-base md:text-md leading-relaxed">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center bg-black rounded-full p-1 mt-6 mb-10 sm:mb-16 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base font-medium ${
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
                : "bg-black text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 mt-8 px-4 md:px-32 justify-center relative z-10">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#100822] p-6 rounded-xl shadow-xl max-w-[455%] md:max-w-[450%] mx-auto overflow-hidden transform hover:scale-[1.02] transition duration-300"
            >
              <Image
                src={project.image}
                alt="Project Image"
                className="rounded-xl w-full h-[450px] object-cover hover:scale-105 transition duration-300"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RecentWorks;

