"use client";

import { motion } from "framer-motion";

const experienceData = [

  {
    year: "June 2024 - Present",
    title: "Senior Full Stack Developer | Contour Software",
    place: [
      "Developed cross-platform apps with Flutter & React Native",
      "Web apps with React, Next.js, Node.js",
      "Firebase, payment gateways, AI",
      "Database handling: MySQL, MongoDB",
      "App Store + Play Store deployment",
    ],
  },
  {
    year: "March 2021 - March 2023",
    title: "Full Stack Developer | Gaditek",
    place: [
      "Flutter/React Native apps, Node.js/Firebase APIs",
      "E-commerce sites with Next.js, WordPress, Shopify",
      "Security & performance enhancements",
    ],
  },
  {
    year: "Jan 2019 - Feb 2021",
    title: "Junior Web Developer | Logicose",
    place: [
      "Assisted Flutter & React Native apps",
      "Customized WordPress & Shopify sites",
      "JS, PHP, MySQL, API integrations",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#080313] text-white py-22 px-4 md:px-16 lg:px-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Section Heading */}
        <div className="relative z-10 text-center mb-22 sm:mb-16 mt-8 sm:mt-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3b82f6 0%, #67e8f9 50%, #d1d5db 100%)",
              }}
            >
              My Professional Experience
            </span>
          </h2>
          <p className="text-gray-300 mt-3 mb-22 max-w-xl mx-auto text-sm sm:text-base md:text-md leading-relaxed">
            Bringing your ideas to life with stunning digital experiences.
          </p>
        </div>

        {/* Vertical Timeline Line */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-cyan-300 opacity-70 rounded-full h-5/6"></div>

        {/* Timeline Items */}
        <div className="relative z-10 flex flex-col gap-16">
          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center w-full md:w-1/2 ${
                  isLeft ? "self-start pr-12" : "self-end pl-12"
                }`}
              >
                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0e1525] border border-gray-800 hover:border-cyan-500 transition duration-300 p-10 rounded-xl shadow-lg w-full flex flex-col justify-between text-left"
                >
                  <p className="text-sm text-cyan-400 font-semibold">
                    {exp.year}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold mt-2">
                    {exp.title}
                  </h3>
                  <ul className="text-sm text-gray-300 mt-3 list-disc pl-5 space-y-2">
                    {exp.place.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
