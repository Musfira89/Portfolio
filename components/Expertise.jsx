// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const expertiseData = [
//   {
//     title: "Full-Stack Web Development",
//     description:
//       "Building scalable web applications using modern frameworks and best practices.",
//     skills: ["React.js, Next.js, JavaScript", "Node.js, PHP, Firebase"],
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Crafting high-performance mobile experiences using Flutter & React Native.",
//     skills: ["Flutter, React Native", "Firebase, Node.js"],
//   },
//   {
//     title: "E-Commerce Solutions",
//     description:
//       "Creating smooth and secure online shopping experiences with top platforms.",
//     skills: ["Shopify, WooCommerce", "Stripe, PayPal"],
//   },
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 1000,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
// };

// const ExpertiseCarousel = () => {
//   return (
//     <div className="w-full bg-black text-white py-32">
//       <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-24 bg-clip-text text-transparent"
//           style={{ backgroundImage: "linear-gradient(90deg, #8750f7 0%, #9b6af3 20%, #e5e7eb 100%)" }}
//         >
//           My Professional Experience
//         </motion.h2>
//       <p className="text-lg text-center text-gray-400">
//         Specializing in modern technologies for high-performance solutions.
//       </p>

//       <div className="max-w-3xl mx-auto mt-12 px-6">
//         <Slider {...settings}>
//           {expertiseData.map((item, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="relative p-10 bg-gray-900 rounded-lg shadow-lg border border-gray-700"
//             >
//               {/* Glowing ring effect */}
//               <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-500 transition duration-500"></div>

//               <h3 className="text-2xl font-semibold text-white">
//                 {item.title}
//               </h3>
//               <p className="text-gray-400 mt-2">{item.description}</p>
//               <ul className="text-gray-300 text-md mt-4 space-y-1">
//                 {item.skills.map((skill, i) => (
//                   <li key={i} className="flex items-start">
//                     <span className="text-purple-400 font-medium">•</span>
//                     <span className="ml-2">{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default ExpertiseCarousel;
