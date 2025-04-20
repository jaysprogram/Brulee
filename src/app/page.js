
import Image from "next/image";
import localFont from 'next/font/local';
import Link from "next/link"

import NavBar from "../../components/Navbar"
import Footer from "../../components/Footer";

const castellar = localFont({
  src: './fonts/Castellar.ttf',  // adjust path based on where this file is
  display: 'swap',
});


//landing page
export default function LandingPage() {
  return (

    <div className="bg-white flex flex-col items-center justify-start min-h-screen p-10 pb-200 gap-45 sm:p-20 rfont-[family-name:var(--font-calibri)]">

      <main className="flex flex-col items-center w-full gap-12">

        {/*navbar*/}
        <NavBar></NavBar>


        <div className= " border-[#fcc002] border-[20px] mt-20 mr-9 rounded-2xl">

          <img 
            src="/jewelry-pic/chainBracelet.png" 
            className="w-100 l-200"
            > 
          </img>
          {/*add src, alt (for alternative text), and className to edit the image */}


        </div>

      </main>

      {/* Footer */}
      <Footer></Footer>

    </div>

  );
}
