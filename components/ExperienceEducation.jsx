"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import badge from "../assets/Portfolio/badge.png";

const experienceData = [
  {
    year: "2023 - Present",
    title: "Freelance Full Stack Developer | Upwork & Direct Leads",
    place: [
      "Full Stack Development with MERN & Next.js 14",
      "Shopify Stores, WordPress CMS",
      "Flutter & React Native Apps",
      "Python, API Integrations, Cloud Deployments"
    ],
  },
  
  {
    year: "June 2024 - Present",
    title: "Senior Full Stack Developer | Contour Software",
    place: [
      "Developed cross-platform apps with Flutter & React Native",
      "Web apps with React, Next.js, Node.js",
      "Firebase, payment gateways, AI",
      "Database handling: MySQL, MongoDB",
      "App Store + Play Store deployment"
    ],
  },
  {
    year: "March 2021 - March 2023",
    title: "Full Stack Developer | Gaditek",
    place: [
      "Flutter/React Native apps, Node.js/Firebase APIs",
      "E-commerce sites with Next.js, WordPress, Shopify",
      "Security & performance enhancements"
    ],
  },
  {
    year: "Jan 2019 - Feb 2021",
    title: "Junior Web Developer | Logicose",
    place: [
      "Assisted Flutter & React Native apps",
      "Customized WordPress & Shopify sites",
      "JS, PHP, MySQL, API integrations"
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-32 px-4 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-24 bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(90deg, #8750f7 0%, #9b6af3 20%, #e5e7eb 100%)" }}
        >
          <Image src={badge} alt="badge" width={40} height={40} />
          My Professional Experience
        </motion.h2>

        {/* Central Line with Reduced Height */}
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 opacity-70 rounded-full h-5/6"></div>

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
                className={`relative flex items-center w-full md:w-1/2 ${isLeft ? "self-start pr-12" : "self-end pl-12"}`}
              >
                {/* Experience Card with Bullet Points */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#1c1c24] border border-gray-800 hover:border-purple-600 transition duration-300 p-10 rounded-xl shadow-lg w-full flex flex-col justify-between text-left"
                >
                  <p className="text-sm text-purple-400 font-semibold">{exp.year}</p>
                  <h3 className="text-lg md:text-xl font-bold mt-2">{exp.title}</h3>
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
