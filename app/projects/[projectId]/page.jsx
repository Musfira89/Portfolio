"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../data/projectsData";
import Footer from "../../../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectDetail({ params }) {
  const project = projects.find(
    (proj) => proj.id === parseInt(params.projectId)
  );
  if (!project) return notFound();
  const [selectedImage, setSelectedImage] = useState(project.image);

  return (
    <>
      {/* Header */}
      <div className="w-full h-[300px] md:h-[400px] relative z-50">
        {/* Glassmorphism Gradient Effect */}
        <div className="absolute inset-0 bg-[#0a0a0f] text-gray-400  bg-opacity-70 backdrop-blur-xl flex flex-col items-center justify-center text-center px-4  shadow-xl">
          {/* Floating Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {project.title}
          </h1>

          <nav className="mt-3 text-sm md:text-base text-gray-300 flex flex-wrap justify-center gap-2">
            <Link
              href="/"
              className="transition duration-200 text-cyan-400 hover:text-cyan-300 hover:scale-105"
            >
              Home
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link
              href="/projects"
              className="transition duration-200 text-cyan-400 hover:text-cyan-300 hover:scale-105"
            >
              Projects
            </Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-white font-semibold">{project.title}</span>
          </nav>
        </div>
      </div>

      <section className="relative w-full bg-gradient-to-l from-[#0a0a0f] to-[#111827] text-white pb-20 min-h-screen overflow-hidden">
        {/* Floating Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        {/* Screenshot Section */}
        <div className="w-full max-w-5xl mx-auto mt-12 px-4 relative">
          {selectedImage ? (
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={selectedImage}
                alt={project.title}
                width={1100}
                height={700}
                className={`rounded-3xl object-contain w-full ${
                  project.category === "MobileApp" ? "h-[500px]" : "h-auto"
                }`}
                priority
              />
            </div>
          ) : (
            <div className="h-[520px] flex items-center justify-center text-gray-400 rounded-3xl bg-gray-800">
              <p className="text-lg font-medium">No Image Available</p>
            </div>
          )}
        </div>

        {/* Thumbnail Images */}
        {project.gallery?.length > 0 && (
          <div className="flex gap-4 mt-6 justify-center">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 rounded-lg transition-all
          ${
            selectedImage === img
              ? "ring-2 ring-cyan-300"
              : "ring-2 ring-transparent"
          }
          hover:ring-cyan-400 bg-gray-900 hover:shadow-md`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        )}

        <hr className="border-gray-300 max-w-6xl mx-auto my-12" />

        {/* Project Info Section */}
        <motion.div
          className="max-w-6xl mx-auto px-4 md:px-10 mb-16 grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Project Overview */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              Project Overview
            </h2>
            <p className="text-gray-300 text-md leading-relaxed">
              {project.overview ||
                project.description ||
                "No overview provided."}
            </p>
          </div>

          {/* Project Details */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              Project Details
            </h2>
            <div className="grid grid-cols-2 gap-y-5 text-md text-gray-500">
              {[
                ["Client", project.client || "Upwork"],
                ["Category", project.category || "General"],
                ["Role", project.role || "Developer"],
                ["Status", project.status || "Completed"],
                ["Start Date", project.startDate || "N/A"],
                ["End Date", project.endDate || "N/A"],
                ["Duration", project.duration || "N/A"],
              ].map(([label, value], index) => (
                <div key={index}>
                  <span className="block font-medium text-gray-100">
                    {label}
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.div
          className="max-w-6xl mx-auto px-4 md:px-10 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
            Description
          </h2>
          <p className="text-gray-300 text-md leading-relaxed font-light">
            {project.description || "No additional description provided."}
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        {project.techStack?.length > 0 && (
          <motion.div
            className="max-w-6xl mx-auto px-4 md:px-10 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="relative px-5 py-2.5 rounded-full text-sm font-medium 
               text-white bg-gray-900/90 shadow-md
               border-2 border-transparent ring-2 ring-cyan-500/40
               hover:ring-cyan-400/70 hover:scale-105 
               transition-all duration-300 ease-in-out"
                >
                  ⚙ {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Live Project Button */}
        {project.link && (
          <motion.div
            className="max-w-6xl mx-auto px-4 mt-6 mb-10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 
               hover:from-cyan-400 hover:to-blue-500 
               text-white font-semibold px-6 py-4 rounded-md 
               transition-all shadow-md hover:scale-105"
            >
              View Live Project &rarr;
            </a>
          </motion.div>
        )}
      </section>
      <Footer />
    </>
  );
}
