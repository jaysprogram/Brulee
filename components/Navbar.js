// components/NavBar.js
import Link from "next/link";
import localFont from "next/font/local";
 
const castellar = localFont({
  src: "../src/app/fonts/Castellar.ttf", // adjust this path to wherever you keep your .ttf
  display: "swap",
});

export default function NavBar() {
  return (

    <nav className="flex items-center justify-evenly w-full px-8 text-black font-serif text-[20px] font-medium">

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
