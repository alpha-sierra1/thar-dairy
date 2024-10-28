"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Bilona Pure Ghee",
    price: "₹1650.00",
    quantity: "1kg",
    images: ["/ghee-1kg-front.jpg", "/ghee-1kg-back.JPG"],
    description:
      "Experience the purest Bilona ghee, made using traditional methods to preserve its natural goodness and flavor.",
  },
  {
    id: 2,
    name: "Bilona Herbal Ghee",
    price: "₹825.00",
    quantity: "500g",
    images: ["/ghee-1kg-front.jpg", "/ghee-500g-back.jpg"],
    description:
      "Bilona ghee infused with natural herbs for added health benefits and a unique taste experience.",
  },
];

const comboProduct = {
  name: "Combo Pack: Bilona Pure & Herbal Ghee",
  price: "₹2475.00",
  image: "/ghee-combo-front.jpg",
  description:
    "Get the best of both worlds with our special combo offer, combining the richness of Bilona Pure and Herbal Ghee.",
};

export default function ProductShowcase() {
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative py-12 overflow-hidden"
      style={{
        backgroundImage: "url('/products-abstract-bg.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: `center ${scrollY * 0.5}px`, // Parallax effect
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 165, 0, 0.5), rgba(255, 255, 255, 0.8))", // Orange gradient
          zIndex: 1,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Individual Products */}
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Start from the sides
            animate={{ x: 0, opacity: 1 }} // Animate to center
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-4 overflow-hidden transform hover:shadow-xl transition-shadow duration-300 border border-orange-400"
            onMouseEnter={() => setHoveredProductIndex(index)}
            onMouseLeave={() => setHoveredProductIndex(null)}
          >
            <div className="relative overflow-hidden rounded-lg h-96">
              <Image
                src={
                  hoveredProductIndex === index
                    ? product.images[1]
                    : product.images[0]
                }
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-lg transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-semibold text-red-800">
                {product.price} ({product.quantity})
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Combo Product Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto px-4 mt-12 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform transition-shadow duration-300"
      >
        <div className="flex flex-col lg:flex-row items-center p-6 gap-6">
          <div className="relative flex justify-center items-center h-96 w-full lg:w-1/2 border border-orange-400 rounded-lg">
            <Image
              src={comboProduct.image}
              alt={comboProduct.name}
              layout="fill"
              objectFit="contain"
              className="rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="lg:ml-6 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {comboProduct.name}
            </h2>
            <p className="text-gray-600">{comboProduct.description}</p>
            <p className="text-xl font-semibold text-red-800">
              {comboProduct.price}
            </p>
            {/* <div className="mt-4">
              <button className="bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-500 transition">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </motion.div>

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
