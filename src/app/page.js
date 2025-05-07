import { SignedIn } from "@clerk/nextjs";
import NavBar from "../components/Navbar"
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

//landing page
export default function LandingPage() {

  return (

    <div className="bg-white flex flex-col min-h-screen rfont-[family-name:var(--font-calibri)]">
    {/* Navbar */}
    <NavBar />

    {/* Main Content */}
    <main className="flex flex-col items-center w-full flex-1">
      <ProductCard />
    </main>

    {/* Footer */}
    <Footer />
  </div>

  );
}
