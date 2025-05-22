'use client'
import { useEffect, useState } from "react";
import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import localFont from "next/font/local";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const castellar = localFont({
  src: '../../public/fonts/Castellar.ttf',
  display: 'swap',
});

export default function NavBar({ transparent = false }) {
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparent]);

  const navClass = transparent
    ? scrolled
      ? "bg-white shadow-md"
      : "bg-transparent hover:bg-white"
    : "bg-white";

  return (
    <nav className={`w-full fixed top-0 z-50 pt-10 pb-6 transition-all duration-300 ${navClass}`}>
      <div className="flex justify-center items-center text-black font-serif text-[20px] font-medium gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">

        {/* Top Right Icons */}
        <div className="absolute top-4 right-8 flex items-center gap-4">
          <FaSearch
            className="text-gray-700 cursor-pointer hover:text-yellow-500 transition"
            onClick={() => setShowSearch(!showSearch)}
          />

          <SignedIn>
            <Link href="/account/profile">
              <UserButton />
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <button className="font-bold text-gray-700 cursor-pointer hover:text-yellow-500 transition">Sign in</button>
            </SignInButton>
          </SignedOut>

          <Link href="/cart">
            <FaShoppingCart className="text-gray-700 cursor-pointer hover:text-yellow-500 transition" />
          </Link>
        </div>

        {/* Search Input */}
        {showSearch && (
          <div className="absolute top-14 right-8 bg-white border border-gray-300 rounded-md p-2 shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none px-2"
            />
          </div>
        )}

        {/* Navigation Links */}
        <Link href="/On_Sale">
          <button className="hover:text-yellow-500 transition-all duration-500 ease-in-out">On Sale</button>
        </Link>

        <Divider />

        <Link href="/about">
          <button className="hover:text-yellow-500 transition-all duration-500 ease-in-out">About</button>
        </Link>

        <Divider />

        <Link href="/">
              <h1 className={`${castellar.className} text-5xl font-medium text-black relative z-10`}>
                Brûlée
              </h1>
        </Link>

        <Divider />

        <Link href="/products">
          <button className="hover:text-yellow-500 transition-all duration-500 ease-in-out">Products</button>
        </Link>

        <Divider />

        <Link href="/shop">
          <button className="hover:text-yellow-500 transition-all duration-500 ease-in-out">Services</button>
        </Link>
      </div>
    </nav>
  );
}

function Divider() {
  return <div className="w-0.5 h-5 bg-yellow-500 mx-4" />;
}
