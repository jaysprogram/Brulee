import Image from "next/image";

//landing page
export default function LandingPage() {
  return (
    
    <div className="flex flex-col items-center justify-start min-h-screen p-10 pb-200 gap-45 sm:p-20 rfont-[family-name:var(--font-calibri)]">
      
      <div className = "inline relative-block">

        {/* center the freaking rectangle */}
        <div className = "h-2 w-full bg-yellow-400 -z-10 px-6 py-2"> 

           {/*Title page */}
         <h1 className="text-4xl font-medium font-calibri text-black items-center justify-start">
           Brûlée
         </h1>
       
        </div>
       

      </div>

      <div className = "flex flex-col">

        <Image>
          {/**add src, alt (for alternative text), and className to edit the image */}
        </Image>

      </div>
    
    
    </div>
  );
}
