"use client";

import React from "react";
import NavBar from "../../components/Navbar";

export const products = [
  {
    id: 1,
    name: "White Flower Bracelet",
    description:
      "A delicate 18k gold chain holds a single brilliant-cut diamond, offering a subtle touch of elegance. Lightweight, refined, and handcrafted for timeless luxury!",
    price: 99.99,
    image: "/images/bracelet.png", // put a placeholder in /public/images/widget.jpg
    features: [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
    slug: 'white-flower-bracelet'
},
{
  id: 2,
  name: 'Chain Bracelet',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/chainBracelet.png",
  features: [
    "Feature One: Ultra‑durable",
    "Feature Two: Super efficient",
    "Feature Three: Compact design",
  ],
  slug: 'chain-bracelet'
},
{
  id: 3,
  name: 'Diamond Bracelet',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/diamondBracelet.png",
  features: [
    "Feature One: Ultra‑durable",
    "Feature Two: Super efficient",
    "Feature Three: Compact design",
  ],
  slug: 'diamond-bracelet'
},
{
  id: 4,
  name: 'Diamond Flower',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/diamondBracelet.png",
  features: [
    "Feature One: Ultra‑durable",
    "Feature Two: Super efficient",
    "Feature Three: Compact design",
  ],
  slug: 'diamond-flower'
},
{
  id: 5,
  name: 'Ear Cuff',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/diamondBracelet.png",
  features: [
    "Feature One: Ultra‑durable",
    "Feature Two: Super efficient",
    "Feature Three: Compact design",
  ],
  slug: 'ear-cuff'

},
{
  id: 6,
  name: 'Gold Bracelet',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/diamondFlower.png",
  features: [
    "Feature One: Ultra‑durable",
    "Feature Two: Super efficient",
    "Feature Three: Compact design",
  ],
  slug: 'gold-bracelet'
},
{
    id:7,
  name: 'Pink Flower Bracelet',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/pinkFlowerBracelet.png",
  features: [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
  slug: 'pink-flower-bracelet'
},
{
    id:8,
  name: 'Silver Flower Bracelet',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/silverFlower.png",
  features: [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
  slug: 'silver-flower-bracelet'
},
{
    id:9,
  name: 'Thin Bracelet',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/thinBracelet.png",
  features: [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
  slug: 'thin-bracelet'
},
{
    id:10,
  name: 'Thin Flower Bracelet',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/thinFlower.png",
  features: [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
  slug: 'thin-flower-bracelet'

},
{
    id:11,
  name: 'White Flower',
  description: 'A chain bracelet is a stylish piece of jewelry made from interlinked metal loops, offering a sleek and versatile design that complements both casual and formal looks.',
  price: 299.99,
  image: "/jewelry-pic/whiteFlower.png",
  features: [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
  slug: 'white-flower'
},
];
/*
  return (
    <div className="min-h-screen bg-gray-50">
      { Navbar }
      <NavBar/>

      {Product Details }
      <main className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow">
          <img
            src={product.idiamondmage}
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

      { Footer }
      <footer className="bg-white mt-12 py-6 shadow-inner">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
*/