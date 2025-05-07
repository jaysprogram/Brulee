'use client'
import { SignInButton, UserButton, SignedOut,SignedIn, SignIn } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";


const castellar = localFont({
  src: '../../public/fonts/Castellar.ttf',
  display: 'swap',
});

export default function NavBar() {
  const [showSearch, setShowSearch] = useState(false);

  return (


    <nav className="bg-white flex pt-10 items-center justify-evenly w-full  text-black max-w-7xl mx-auto font-serif text-[20px] font-medium">

      <div className="absolute top-4 right-8 flex items-center gap-4">
        {/* Search Button */}
        <FaSearch
          className="text-gray-700 cursor-pointer hover:text-yellow-500 transition"
          onClick={() => setShowSearch(!showSearch)}
        />

        {/* User Icon - Navigates to Login */}
          <SignedIn>
          <UserButton/>
          </SignedIn>
          {/*if not signed show user sign in button*/}
          <SignedOut>
            <SignInButton >
              <button className="font-bold text-gray-700 cursor-pointer hover:text-yellow-500 transition">Sign in</button>
            </SignInButton>
          </SignedOut>
          
        

        {/* Shopping Cart Icon - Navigates to Cart */}
        <Link href="/cart">
          <FaShoppingCart className="text-gray-700 cursor-pointer hover:text-yellow-500 transition" />
        </Link>
      </div>


      {/* Search Bar Popup */}
      {showSearch && (
        <div className="absolute top-14 right-8 bg-white border border-gray-300 rounded-md p-2 shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none px-2"
          />
        </div>
      )}

      <Link href="/">
        <button className="hover:text-yellow-500 transition-all duration-500 ease-in-out ">
          Home
        </button>
      </Link>

      <Divider />

      <Link href="/about">
        <button className="hover:text-yellow-500 transition-all duration-500 ease-in-out">
          About
        </button>
      </Link>

      <Divider />

      <div className="relative inline-block">
        <div className="relative bg-white p-4">
          {/* yellow highlight */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-3 bg-yellow-400 z-0" />
          <h1
            className={`${castellar.className} text-5xl font-medium text-black relative z-10`}
          >
            Brûlée
          </h1>
        </div>
      </div>

      <Divider />

      <Link href="/products">
        <button className="hover:text-yellow-500 transition-all duration-500 ease-in-out">
          Products
        </button>
      </Link>

      <Divider />

      <Link href="/shop">
        <button className="hover:text-yellow-500 transition-all duration-500 ease-in-out">
          Services
        </button>
      </Link>
    </nav>
  );
}

function Divider() {
  return <div className="w-0.5 h-5 bg-yellow-500 mx-4" />;
}
