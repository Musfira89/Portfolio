"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const testimonials = [
  {
    title: "UPWORK CLIENT – Brazil",
    quote:
      "Outstanding work! The freelancer delivered exactly what was agreed upon, on time, with great quality and attention to detail.",
    name: "Satisfied Upwork Client",
    project: "React SPA Project – (5.0★)",
  },
  {
    title: "UPWORK CLIENT – UK",
    quote:
      "Arees Shah is a genius! Delivered everything with high quality and great design sense. Extremely reliable, quick, and efficient. Will definitely rehire.",
    name: "Satisfied Upwork Client",
    project: "WordPress UI Fixes – (5.0★)",
  },
  {
    title: "LOCAL CLIENT – PAKISTAN",
    quote:
      "Absolutely impressed with the professionalism and skills. Arees developed a responsive React website for our startup that exceeded expectations. Highly recommended!",
    name: "Faisal Ahmed",
    project: "Startup Founder, Karachi – (5.0★)",
  },
  {
    title: "Client – Tech Entrepreneur (USA)",
    quote:
      "Arees built our company website from scratch, and it exceeded our expectations. The design is stunning, and the site runs flawlessly. Highly recommended!",
    name: "Satisfied Client",
    project: "Corporate Website – (5.0★)",
  },
  {
    title: "Client – Product Manager ",
    quote:
      "We had an urgent UI issue affecting our workflow, and Arees resolved it in record time. Super responsive and incredibly skilled!",
    name: "Satisfied Client",
    project: "Web App UI Fixes – (4.8★)",
  },
  {
    title: "Mark Stevens – Digital Marketer (Australia)",
    quote:
      "Arees crafted a sleek and high-converting landing page for us. Our lead generation has significantly improved since its launch!",
    name: "Mark Stevens",
    project: "Marketing Landing Page – (5.0★)",
  },
  {
    title: "Hassan Raza – E-commerce Owner (Pakistan)",
    quote:
      "Our WooCommerce store now runs seamlessly, and every custom feature works exactly as needed. Arees did an amazing job!",
    name: "Hassan Raza",
    project: "WooCommerce Store Development – (4.6★)",
  },
  {
    title: "Client – CTO (UK)",
    quote:
      "Arees handled our backend API development with absolute professionalism. The integration process was smooth, and everything works perfectly.",
    name: "Satisfied Client",
    project: "API Backend Development – (5.0★)",
  },
  {
    title: "Client – Business Owner",
    quote:
      "We needed an advanced dashboard to manage our client data, and Arees built a powerful and intuitive solution. Fantastic experience!",
    name: "Satisfied Client",
    project: "Admin Dashboard – (5.0★)",
  },
  {
    title: "Client – Startup Founder (Canada)",
    quote:
      "Our WordPress site was outdated, but Arees gave it a fresh, modern design and improved its performance dramatically. Couldn’t be happier!",
    name: "Satisfied Client",
    project: "WordPress Redesign – (5.0★)",
  },
  {
    title: "Client – E-commerce Specialist",
    quote:
      "We had a vision for our Shopify store, and Arees executed it flawlessly. The store is well-optimized, and everything works seamlessly!",
    name: "Satisfied Client",
    project: "Shopify Store Setup – (5.0★)",
  },
  {
    title: "Client – Software Engineer",
    quote:
      "Arees has an incredible eye for frontend development. The React interface he built is sleek, responsive, and lightning-fast.",
    name: "Satisfied Client",
    project: "React Frontend Development – (5.0★)",
  },
  {
    title: "Client – App Founder",
    quote:
      "Our React Native mobile app turned out fantastic! The UI is smooth, and the performance is top-notch. Arees really knows his stuff.",
    name: "Satisfied Client",
    project: "Mobile App (React Native) – (5.0★)",
  },
  {
    title: "Client – Tech Startup CEO",
    quote:
      "We needed a full MERN stack application that was scalable and optimized, and Arees delivered an outstanding platform with flawless functionality.",
    name: "Satisfied Client",
    project: "MERN Stack Development – (5.0★)",
  },
  {
    title: "Client – Digital Solutions Architect",
    quote:
      "Speed and SEO were our top priorities, and Arees built us a blazing-fast web app using Next.js 14. The performance boost was incredible!",
    name: "Satisfied Client",
    project: "Next.js Web App – (5.0★)",
  },
  {
    title: "Client – Mobile App Investor (Australia)",
    quote:
      "Arees developed a high-performance mobile app for us. The animations are smooth, the design is elegant, and the app runs like a dream!",
    name: "Satisfied Client",
    project: "Mobile App (React Native) – (5.0★)",
  },
  {
    title: "CLIENT – Project Lead",
    quote:
      "From frontend to backend, Arees built a solid full-stack solution that runs smoothly. His ability to handle everything seamlessly is truly impressive!",
    name: "Satisfied Client",
    project: "Full Stack Web Application – (5.0★)",
  },
  {
    title: "CLIENT – Startup Founder",
    quote:
      "I wanted a mobile app that felt premium, and Arees nailed it. The UI is sleek, and the app runs like a dream. Couldn’t be happier with the result!",
    name: "Satisfied Client",
    project: "Mobile App Development (React Native) – (5.0★)",
  },
  {
    title: "CLIENT – Business Owner",
    quote:
      "Arees developed our MERN stack platform exactly how we envisioned it—scalable, secure, and lightning-fast. A great developer to work with!",
    name: "Satisfied Client",
    project: "MERN Stack Platform – (5.0★)",
  },
  {
    title: "CLIENT – E-commerce Lead",
    quote:
      "I had a vision for a multi-vendor e-commerce store, and Arees made it a reality. Every feature works flawlessly, and the user experience is top-notch.",
    name: "Satisfied Client",
    project: "Full Stack E-commerce Platform – (5.0★)",
  },
  {
    title: "CLIENT – SaaS Founder",
    quote:
      "Our SaaS platform felt outdated, but Arees transformed it into a sleek, modern, and user-friendly experience. The results speak for themselves!",
    name: "Satisfied Client",
    project: "SaaS Platform Revamp – (5.0★)",
  },
  {
    title: "CLIENT – Tech Startup",
    quote:
      "Our website was painfully slow, and Arees optimized it to load in half the time! The speed improvement made a huge difference for our users.",
    name: "Satisfied Client",
    project: "Website Performance Optimization – (5.0★)",
  },
  {
    title: "CLIENT – CRM Lead",
    quote:
      "Managing clients used to be chaotic, but Arees built a custom CRM that streamlined everything. Now, our workflow is more efficient than ever.",
    name: "Satisfied Client",
    project: "Full Stack CRM Development – (4.6★)",
  },
  {
    title: "CLIENT – Digital Agency",
    quote:
      "Arees handled our Next.js 14 migration effortlessly. Our web app is now faster, and the new optimizations have greatly improved performance.",
    name: "Satisfied Client",
    project: "Next.js 14 Migration – (4.9★)",
  },
  {
    title: "CLIENT – Mobile App Startup",
    quote:
      "From the first call to the final product, he guided us through the entire mobile app development process. The final app exceeded our expectations!",
    name: "Satisfied Client",
    project: "React Native Mobile App – (4.9★)",
  },
  {
    title: "CLIENT – Product Owner",
    quote:
      "We needed an advanced  dashboard with real-time analytics, and delivered beyond our expectations. The UI is clean, and the data updates instantly!",
    name: "Satisfied Client",
    project: "Dashboard (Full Stack) – (5.0★)",
  },
];
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-r from-[#0a0a0f] to-[#111827] text-white py-36 px-6 md:px-20 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-2xl md:text-5xl font-extrabold">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3b82f6 0%, #67e8f9 100%)",
              }}
            >
              Client Reviews.
            </span>
          </h2>
          <p className="text-gray-300 mt-3 text-xs md:text-sm mb-16">
            Empowering people in a new digital journey with my super services.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings} className="w-full px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2">
              <div className="bg-[#0f0f1a] p-8 rounded-2xl border border-cyan-500 transition-all duration-300 max-w-sm mx-auto">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-400 font-semibold">
                    {testimonial.title}
                  </h3>
                  <FontAwesomeIcon
                    className="text-cyan-400 text-xl"
                  />
                </div>
                <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <h4 className="font-bold text-white mt-5 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-sm">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
