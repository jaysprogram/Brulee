
"use client";

import React from "react";
import { products } from "./product";
import Link from "next/link";
import NavBar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cart";
import { useRouter } from "next/navigation"; 
import { MdOutlineShoppingCart } from "react-icons/md";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = async (productId) => {
   
    dispatch(addToCart({ productId, quantity: 1 }));

    try {
      const res = await fetch("https://brulee-backend-ph5c.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity: 1,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("Backend error:", data.error);
      } else {
        console.log("Added to DB:", data.cartItem);
      }

     
      router.push("/cart");
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Shop All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            >
              {}
              <Link href={`/product/${p.slug}`}>
                <div className="cursor-pointer">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p className="text-green-600 font-bold">
                    ${p.price.toFixed(2)}
                  </p>
                </div>
              </Link>

              {}
              <button
                onClick={() => handleAddToCart(p.id)}
                className="mt-4 bg-black hover:bg-gray-800 text-white py-2 px-6 rounded flex items-center gap-2"
              >
                <MdOutlineShoppingCart />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
