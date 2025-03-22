"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../../data/projectsData";
import headerImg from "../../../assets/Portfolio/heroBg.png";
import Footer from "../../../components/Footer";
import { useState } from "react";

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
  <Image
    src={headerImg}
    alt="Header"
    fill
    className="object-cover opacity-60"
    priority
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
      {project.title}
    </h1>

    <nav className="mt-3 text-sm md:text-base text-gray-300 flex flex-wrap justify-center gap-2">
      <Link href="/" className="hover:text-white transition duration-200">
        Home
      </Link>
      <span className="text-gray-400">&gt;</span>
      <Link href="/projects" className="hover:text-white transition duration-200">
        Projects
      </Link>
      <span className="text-gray-400">&gt;</span>
      <span className="text-white font-semibold">{project.title}</span>
    </nav>
  </div>
</div>


      <section className="bg-gradient-to-b from-[#ffffff] via-[#f5e8ff] to-[#e0c3fc] text-black min-h-screen pb-20">
        {/* Screenshot Section */}
        <div className="w-full max-w-5xl mx-auto mt-12 px-4 relative">
          {selectedImage ? (
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={selectedImage}
                alt={project.title}
                width={1100}
                height={600}
                className="rounded-3xl object-contain w-full h-auto"
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
              ? "ring-2 ring-purple-300"
              : "ring-2 ring-transparent"
          }
          hover:ring-purple-400 bg-gray-900 hover:shadow-md`}
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
        <div className="max-w-6xl mx-auto px-4 md:px-10 mb-16 grid md:grid-cols-2 gap-12">
          {/* Project Overview */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Project Overview
            </h2>
            <p className="text-gray-700 text-md leading-relaxed">
              {project.overview ||
                project.description ||
                "No overview provided."}
            </p>
          </div>

          {/* Project Details */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {" "}
              Project Details
            </h2>
            <div className="grid grid-cols-2 gap-y-5 text-md text-gray-700">
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
                  <span className="block font-medium text-gray-900">
                    {label}
                  </span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description Section */}
        {project.description && (
          <div className="max-w-6xl mx-auto px-4 md:px-10 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {" "}
              Detailed Description
            </h2>
            <p className="text-gray-700 text-md leading-relaxed">
              {project.description}
            </p>
          </div>
        )}
        {/* Tech Stack Section */}
        {project.techStack?.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 md:px-10 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="relative px-5 py-2.5 rounded-full text-sm font-medium 
                     text-gray-200 dark:text-white bg-gray-900/90 shadow-md
                     border-2 border-transparent ring-2 ring-purple-500/40
                     hover:ring-purple-400/70 hover:scale-105 
                     transition-all duration-300 ease-in-out"
                >
                  ⚙ {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features Section */}
        {project.features?.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 md:px-10 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {" "}
              Key Features
            </h2>
            <ul className="space-y-4 pl-6">
              {project.features.map((features, index) => (
                <li
                  key={index}
                  className="relative text-lg text-gray-700 leading-relaxed"
                >
                  <span className="absolute -left-6 text-purple-900 text-xl">
                    •
                  </span>
                  {features}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Live Project Button */}
        {project.link && (
          <div className="max-w-6xl mx-auto px-4 mt-6 mb-10 text-center">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-purple-900 hover:bg-purple-800 text-white font-semibold px-6 py-4 rounded-md transition-all shadow-md hover:scale-105"
            >
              View Live Project &rarr;
            </a>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
