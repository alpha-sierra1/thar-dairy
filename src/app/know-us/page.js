import React from "react";

const stats = [
  { name: "Pure Ghee", value: "100%" },
  { name: "Smooth Delivery", value: "24/7" },
  { name: "Reasonable Price", value: "₹1650/kg" },
  { name: "In India", value: "Everywhere" },
];

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-36 sm:py-48">
      <img
        alt=""
        src="/gir-cow-eating.jpg" // Ensure this URL points to a valid image.
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center opacity-30"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl transition-transform transform hover:scale-105">
            Who are we?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Thar Dairy, my father and I saw the widespread use of adulterated
            ghee around us, and we knew we could make a difference. We decided
            to take matters into our own hands and create something better. That
            is how Bilona Ghee was born. A promise from our family to yours,
            delivering the pure, authentic ghee that you truly deserve.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col items-center justify-center p-6 transition-transform transform rounded-lg bg-black bg-opacity-40 text-white hover:bg-opacity-90 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600"
              >
                <dd className="text-4xl font-bold leading-9 tracking-tight">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-lg leading-7 text-gray-300">
                  {stat.name}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>

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
