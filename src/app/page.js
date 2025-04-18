import Image from "next/image";
import localFont from 'next/font/local';

const castellar = localFont({
  src: './fonts/Castellar.ttf',  // adjust path based on where this file is
  display: 'swap',
});


//landing page
export default function LandingPage() {
  return (
    
    <div className="flex flex-col items-center justify-start min-h-screen p-10 pb-200 gap-45 sm:p-20 rfont-[family-name:var(--font-calibri)]">
      

      <main className="flex flex-col items-center gap-12">
        

        <div className = "relative inline-block">   {/* "inline relative-block" */}

            {/* center the freaking rectangle */}
            <div className = "absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-3 bg-yellow-400 -z-10"> </div> 
            

            {/*Title page */}
            <h1 className={`${castellar.className} text-5xl font-medium text-black relative z-10`}>
              Brûlée
            </h1>
       
        
        </div>

        <div className = "flex flex-col">

          <Image>
          {/**add src, alt (for alternative text), and className to edit the image */}
          </Image>

        </div>
    
      </main> 


      {/* Footer */}

      <footer className = "bg-[#1c1c1e] text-white py-12 px-6 mt-40 w-full">  {/*text-center text text-sm text-gray-500 py-4 border-t mt-10     © {new Date().getFullYear()} Brûlée. All rights reserved. */}
        <div className = "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

          {/* Column 1: Logo and Description of Footer */}

          <div>
            <h2 className = "text-lg font-bold mb-2">
              Logo
            </h2>
            <p className = "mt-3">
              Welcome to Brûlée, a space filled with beautifully designed jewelry made just for you.
            </p>


            {/* Column 1: Social Media Buttons*/}
            <div className = "flex space-x-3 mt-5">
              
              <a href = "https://instagram.com/marialcarrilloa?igsh=b3kwaml2djVkYTE2"
                 target="_blank"
                 rel="noopener noreferrer">
                <div className = "bg-yellow-400 p-2 rounded-full hover:scale-90 transition">
                  <Image
                    src="/images/instagram.PNG"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </a>
              

              <a href="https://twitter.com"
                 target="_blank" 
                 rel="noopener noreferrer">
                <div className="bg-yellow-400 p-2 rounded-full hover:scale-90 transition">
                  <Image
                    src="/images/twitter.PNG"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </a>
              

              <a href="https://facebook.com" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <div className="bg-yellow-400 p-2 rounded-full hover:scale-90 transition">
                  <Image
                    src="/images/facebook.PNG"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </a>

            </div>
          </div>


          {/* Column 2: Quick Links */}
          <div>
            <h3 className = "tracking-wide font-semibold mb-4">
              Quick Link
            </h3>
            <ul class = "list-none mt-6 space-y-2">
              <li>
                <a href = "#"
                  class = "hover:text-yellow-400 transition-all duration-500 ease-in-out"
                >
                  Home

                </a>

              </li>
              <li>
                <a href = "#"
                  class = "hover:text-yellow-400 transition-all duration-500 ease-in-out"
                >
                  About Us

                </a>

              </li>
              <li>
                <a href = "#"
                  class = "hover:text-yellow-400 transition-all duration-500 ease-in-out"
                >
                  Products

                </a>

              </li>
              
            </ul>


          </div>


        </div>

        <div className = "text-center text text-sm text-gray-500 border-t mt-10">
          © {new Date().getFullYear()} Brûlée. All rights reserved.
        </div>
      </footer>


    </div>

    
  );
}
