// this is where i have the dynamic product details
/*
"use client";

import { useParams } from "next/navigation";
import { products } from "@/app/products/product";
import NavBar from "@/components/Navbar";

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md"
          />

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
*/
"use client";

import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { products } from '@/app/products/product';
import { addToCart } from '@/app/store/cartSlice'; // Adjust path as needed
import NavBar from '@/components/Navbar';

export default function ProductPage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Product not found.
      </div>
    );
  }

  const handleAddToCart = async(product) => {
    dispatch(addToCart({ productId: product.slug, quantity: 1, ...product }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md"
          />

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <ul className="list-disc list-inside mb-6 space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
