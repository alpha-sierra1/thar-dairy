"use client";

import Image from "next/image";

export default function Certifications() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-12 px-8 text-gray-800">
      {/* Header Section with Background Color */}
      <div className="bg-orange-100 p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Certified Quality, Pure Ingredients
        </h1>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
          Our commitment to quality is backed by recognized certifications,
          ensuring that each product meets high standards of purity and
          authenticity.
        </p>
      </div>

      {/* Certification Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-16">
        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md bg-orange-300">
          <h2 className="text-xl font-semibold text-gray-800">
            FSSAI Certified
          </h2>
          <p className="text-gray-600 mt-2">License No: 22224074002198</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md bg-orange-300">
          <h2 className="text-xl font-semibold text-gray-800">
            GST Registered
          </h2>
          <p className="text-gray-600 mt-2">GST No: 08SSRPS0073Q1ZB</p>
        </div>

        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-md bg-orange-300">
          <h2 className="text-xl font-semibold text-gray-800">
            100% Natural Ingredients
          </h2>
          <p className="text-gray-600 mt-2">Pure, organic ingredients only.</p>
        </div>
      </div>

      {/* Inspirational Quote */}
      <blockquote className="text-2xl italic text-gray-700 text-center max-w-3xl mb-16">
        Crafted with care, backed by certifications.
      </blockquote>

      {/* Ingredients Image at Bottom */}
      <div className="w-full max-w-4xl px-4">
        <Image
          src="/label.JPG"
          alt="Ingredients Label"
          width={1000}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-gray-500 text-sm text-center">
        Have questions about our certifications?{" "}
        <a href="/contact-us" className="text-orange-500 font-semibold">
          Contact us
        </a>
      </p>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/+919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 z-20"
      >
        <img
          src="/WhatsApp.svg.webp"
          alt="WhatsApp"
          className="h-16 w-16 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </a>
    </div>
  );
}
