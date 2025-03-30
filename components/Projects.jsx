"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories } from "../data/projectsData";

const RecentWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="works"
      className="bg-[#0a0f1a] text-white py-22 relative overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-[70vw] h-[70vh] bg-gradient-to-br from-[#3b82f6] via-[#67e8f9] to-[#86efac] opacity-10 blur-3xl rounded-full absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10 sm:mb-16 mt-8 sm:mt-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #3b82f6 0%, #67e8f9 50%, #d1d5db 100%)",
            }}
          >
            My Recent Works
          </span>
        </h2>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm sm:text-base md:text-md leading-relaxed">
          Bringing your ideas to life with stunning digital experiences.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="w-full flex justify-center mt-8 mb-22">
        <div className="flex flex-wrap justify-center gap-3 px-6 py-4 backdrop-blur-md bg-[#0e1524]/80 border border-[#2a364f] rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.2)]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 ease-in-out
          ${
            selectedCategory === category
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
              : "bg-[#121a2a] text-white hover:bg-[#1f2738] hover:text-cyan-400 hover:scale-105 hover:ring-2 hover:ring-cyan-500/60"
          }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4 md:px-32 justify-center relative z-10">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="group bg-[#102033] p-2 rounded-2xl shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] overflow-hidden relative cursor-pointer transition duration-300 hover:ring-2 hover:ring-[#67e8f9] hover:shadow-[0_0_20px_#67e8f9]"
            >
              <Link
                href={`/projects/${project.id}`}
                className="block h-full w-full"
              >
<div
  className={`relative w-full h-96 overflow-hidden rounded-xl ${
    project.category === "MobileApp" ? "flex items-center justify-center bg-black" : ""
  }`}
>
  <Image
    src={project.image}
    alt={project.title || "Project Image"}
    fill
    className={`rounded-xl transition-transform duration-500 group-hover:scale-105 ${
      project.category === "MobileApp" ? "object-contain" : "object-cover"
    }`}
  />

  {/* Bottom Overlay */}
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#67e8f9]/80 via-black/60 to-transparent px-5 py-4 rounded-b-xl">
    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
    <p className="text-sm text-gray-300">Click to view details</p>
  </div>
</div>

              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RecentWorks;
