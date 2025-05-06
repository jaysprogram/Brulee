
import NavBar from "../components/Navbar"
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

//landing page
export default function LandingPage() {

  return (

    <div className="bg-white flex flex-col min-h-screen rfont-[family-name:var(--font-calibri)]">
    {/* Navbar */}
    <header>
    <NavBar />
    </header>
    

    {/* Main Content */}
    <main className="flex flex-col items-center w-full flex-1">
      <ProductCard />
    </main>

    {/* Footer */}
    <Footer />
  </div>

  );
}
