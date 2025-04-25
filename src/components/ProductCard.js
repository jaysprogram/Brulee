"use client";

import { useEffect, useState } from "react";

export default function ProductCard() {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        fetch("https://brulee-backend-ph5c.onrender.com/api/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    useEffect(() => {
        if (products.length === 0) return;

        const interval = setInterval(() => {
            setFade(false);  // Start fade-out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
                setFade(true);  // Fade-in new image
            }, 1000);  // Match this to half of your duration for smoothness
        }, 5000);

        return () => clearInterval(interval);
    }, [products]);

    if (products.length === 0) {
        return <p>Loading products...</p>;
    }

    const product = products[currentIndex];

    return (
        <div className="flex justify-center mt-20">
            <div className="flex items-start gap-10">
                {/* Product Image */}
                <img
                    src={`${product.image}`}
                    className={`w-80 h-80 object-cover rounded-xl border-2 border-gray-300 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    alt={product.name}
                />


                {/* Product Info */}
                <div className="w-80 h-80 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 leading-snug">{product.name}</h2>
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
