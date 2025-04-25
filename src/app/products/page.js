"use client";

import React from "react";
import NavBar from "../../components/Navbar";

export default function Product() {
  // mock product data
  const product = {
    id: 1,
    name: "Awesome Widget",
    description:
      "This widget does everything you ever dreamed of—and a little more. Crafted with precision and care.",
    price: 19.99,
    image: "/images/widget.jpg", // put a placeholder in /public/images/widget.jpg
    features: [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <NavBar/>

      {/* Product Details */}
      <main className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />

          <div className="p-6 flex flex-col">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              {product.features.map((f, i) => (
                <li key={i} className="text-gray-700">
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <span className="text-2xl font-semibold text-green-600">
                ${product.price.toFixed(2)}
              </span>

              <button className="ml-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
              
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-6 shadow-inner">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
