
import NavBar from "../components/Navbar"
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

//landing page
export default function LandingPage() {

  return (

    <div className="bg-white flex flex-col items-center justify-start min-h-screen rfont-[family-name:var(--font-calibri)]">
      {/*navbar*/}
      <NavBar />
      <main className="flex flex-col items-center w-full">
        
      <ProductCard/>

      </main>

      {/* Footer */}
      <Footer />

    </div>

  );
}
