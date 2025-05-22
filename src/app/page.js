import { SignedIn } from "@clerk/nextjs";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import BackgroundVideo from "../components/BackVideo";

// Landing page
export default function LandingPage() {
  return (
    <div className="bg-white flex flex-col min-h-screen font-[var(--font-calibri)]">
      {/* Background Video */}
      <BackgroundVideo />

      {/* Navbar (fixed top with transparent bg) */}
        <NavBar transparent />

      {/* Add spacing so content isn't hidden behind the fixed navbar */}
      <div className="h-[64px]" /> {/* Adjust height to match Navbar height */}

      {/* Main Content */}
      <main className="flex flex-col items-center w-full flex-1">
        <ProductCard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
