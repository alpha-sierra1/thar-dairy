"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaSeedling, FaHandHoldingHeart, FaMedal } from "react-icons/fa";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/thar-desert-bg.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-800 drop-shadow-lg tracking-tight"
        >
          Thar Dairy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xl md:text-3xl text-gray-200 drop-shadow-md max-w-lg tracking-wide"
        >
          Discover the Richness of Authentic, Natural Ghee
        </motion.p>

        {/* Highlight Feature Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
        >
          {/* Card 1: Quality Ingredients */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl transform transition-transform duration-300"
          >
            <FaSeedling size={32} className="text-orange-300 mb-3" />
            <h3 className="text-lg font-semibold text-white">
              Quality Ingredients
            </h3>
            <p className="mt-2 text-sm text-gray-200">
              Only the finest ingredients for an authentic taste.
            </p>
          </motion.div>

          {/* Card 2: Traditional Methods */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl transform transition-transform duration-300"
          >
            <FaHandHoldingHeart size={32} className="text-orange-300 mb-3" />
            <h3 className="text-lg font-semibold text-white">
              Traditional Methods
            </h3>
            <p className="mt-2 text-sm text-gray-200">
              Crafted with techniques passed down through generations.
            </p>
          </motion.div>

          {/* Card 3: Sustainable Sourcing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl transform transition-transform duration-300"
          >
            <FaMedal size={32} className="text-orange-300 mb-3" />
            <h3 className="text-lg font-semibold text-white">
              Sustainable Sourcing
            </h3>
            <p className="mt-2 text-sm text-gray-200">
              Ethically sourced to support local communities.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+919876543210" // Replace with your actual WhatsApp number (country code without +)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 z-20"
      >
        <img
          src="/WhatsApp.svg.webp" // Replace with your WhatsApp logo image path
          alt="WhatsApp"
          className="h-16 w-16 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </a>
    </div>
  );
}
