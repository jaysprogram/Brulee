"use client";

import { useEffect, useState } from "react";

function ProductSkeleton() {
  return (
    <div className="flex justify-center mt-20 animate-pulse">
      <div className="flex items-start gap-10">
        {/* Image placeholder */}
        <div className="w-80 h-80 bg-gray-200 rounded-xl" />

        {/* Text placeholders */}
        <div className="w-80 h-80 flex flex-col justify-between">
          <div>
            <div className="h-8 bg-gray-200 rounded mb-4 w-3/4" />
            <div className="h-6 bg-gray-200 rounded mb-4 w-1/2" />
            <div className="h-4 bg-gray-200 rounded mb-2 w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </div>
          {/* Button placeholder */}
          <div className="h-10 bg-gray-200 rounded w-32 self-start" />
        </div>
      </div>
    </div>
  );
}

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    fetch("https://brulee-backend-ph5c.onrender.com/api/products")
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    if (!products.length) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % products.length);
        setFade(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [products]);

  // ←––– swap this:
  if (products.length === 0) {
    return <ProductSkeleton />;
  }

  const product = products[currentIndex];

  return (
    <div className="flex justify-center mt-20">
      <div className="flex items-start gap-10">
        <img
          src={product.image}
          alt={product.name}
          className={`
            w-80 h-80 object-cover rounded-xl border-2 border-gray-300
            transition-opacity duration-500
            ${fade ? "opacity-100" : "opacity-0"}
          `}
        />

        <div className="w-80 h-80 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 leading-snug">
              {product.name}
            </h2>
            <p className="text-xl text-gray-700 mt-2">${product.price}</p>
            <p className="text-sm text-gray-600 mt-4 max-w-md overflow-hidden">
              {product.description}
            </p>
          </div>
          <button className="mt-4 w-fit bg-black hover:bg-gray-800 text-white py-2 px-6 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
