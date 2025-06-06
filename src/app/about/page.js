'use client';
import { useEffect } from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {

  useEffect(() => {
    const gallery = document.getElementById("gallery");
    gallery.style.display = "flex";
    gallery.style.minHeight = "380px";
    gallery.style.display = "flex";
    gallery.style.flexWrap = "wrap";
    const images = document.querySelectorAll("#gallery img");

    images.forEach((img, index) => {
      //img.style.margin = "10px";
      //img.style.border = "1px solid white";
      img.style.borderRadius = "0px";
      img.style.width = "20%";
    });
  }, []);

  return (
    
    <div className="flex flex-col min-h-screen font-sans bg-white">
    <Navbar />  
  
      <section className="relative h-[600px] w-full overflow-hidden">
        
          <img
            src="https://res.cloudinary.com/dbgsublmc/image/upload/v1748876988/Dise%C3%B1o_sin_t%C3%ADtulo_2_wqtrxu.png"
            alt="Back view of woman in mirror"
            className="w-full h-full object-[center_50%] object-cover"
          /> 
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-white text-9xl font-extralight font-[Playfair-Display] tracking-wider text-center">
            About Brulée
          </h1>
          </div>
      </section>
      
      <div className="relative overflow-hidden bg-[#E0C978] py-2">
        <div className="bg-[#E0C978] text-[30px] text-black  font-lightbold font-[Playfair-Display] tracking-wide text-center">
          <div className="flex gap-16">
            <span className="text-[30px]  px-4">Elegant</span>
            <span className=" text-[25px] text-center px-2">●</span>
            <span className="px-4">Authentic</span>
            <span className="text-[25px] text-center">●</span>
            <span className="px-4">Powerful</span>
            <span className="text-[25px] text-center">●</span>
            <span className="px-4">Elegant</span>
            <span className="text-[25px] text-center">●</span>
            <span className="px-4">Authentic</span>
            <span className="text-[25px] text-center">●</span>
            <span className="px-4">Powerful</span>
            <span className="text-[25px] text-center">●</span>
            <span className="text-[30px]  px-4">Elegant</span>
        </div>
      </div>
      </div>

     
    
<section className="h-auto lg:h-[600px] px-4 lg:px-12 bg-black bg-[#1c1c1e]  py-6 px-6 text-white">
  <div className="flex flex-col lg:flex-row gap-8">

    {/* Left column: images */}
    <div className="flex flex-col gap-4 w-full lg:w-1/2">
      {/* Top gray image */}
      <img
        src="https://res.cloudinary.com/dbgsublmc/image/upload/v1747851584/DSC_1396_nazvzm.jpg"
        alt="Top image"
        className="border-white border-6 w-full h-[250px] object-cover"
      />

      {/* Bottom two side-by-side images */}
      <div className="flex gap-4">
        <img
          src="https://res.cloudinary.com/dbgsublmc/image/upload/v1747685431/DSC_1562_ah9br8.jpg"
          alt="Left image"
          className="border-white border-6 w-1/2 h-[250px] object-cover"
        />
        <img
          src="https://res.cloudinary.com/dbgsublmc/image/upload/v1747686205/DSC_1499_pysfvm.jpg"
          alt="Right image"
          className="border-white border-6 w-1/2 h-[250px] object-cover"
        />
      </div>
    </div>

    {/* Right side: paragraph */}
    <div className="w-full lg:w-1/2 pl-40">
    <h1 className="flex justify-center text-5xl font-extralight font-[Playfair-Display] mb-10 mt-15">Mission</h1>
      <p className="mt-2 text-base max-w-md leading-relaxed text-justify text-center ">
       En Brûlée, redefinimos el autocuidado como un acto consciente de bienestar, estilo y presencia.
            Nuestra misión es ofrecer experiencias elegantes, sensoriales y cuidadosamente diseñadas que 
            eleven tu día a día con intención y belleza. </p>
      <p className="mt-2 max-w-md text-base leading-relaxed text-justify text-center ">     
            Cada detalle importa: desde la estética minimalista 
            hasta la funcionalidad de cada pieza. Creemos en el poder de lo sutil, en la fuerza de lo femenino 
            y en el lujo de lo simple. Nuestros accesorios no solo completan tu outfit, sino que activan tu 
            energía, reflejan tu esencia y se convierten en parte esencial de tu rutina
      </p>
    </div>
  </div>
</section>

     
      {/* Section 2 */}
<section className="w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center">

  <div className="w-full md:w-1/2 h-auto px-10 md:pl-20 py-5">

  {/* Heading Section */}
  <div className="-mt-1 mb-4">
    <h1 className="text-5xl font-[Playfair-Display] text-[#fbc560] leading-tight">
      Hi, <br /> I'm Maria Carrillo
    </h1>
  </div>

  {/* Info Box */}
  <div className="bg-[#fbc560] p-6 rounded-sm">
    <h2 className="text-black text-lg font-extralight font-[Playfair-Display] mb-4">
      Fundadora de brûlée, soñadora estratégica y amante de la moda desde siempre.
    </h2>

    <p className="text-black text-base leading-relaxed text-justify font-[Playfair-Display]">
      Soy Maria Carrillo, emprendedora apasionada por el diseño, el bienestar y la belleza que vive en los detalles.
      brûlée nace de mi deseo de crear una marca que combine estética, intención y energía;
      una extensión de mi estilo de vida y de mi visión: hacer del autocuidado algo elegante, auténtico y poderoso.
    </p>
  </div>

</div>


  {/* Right Side: Image */}
  <div className="w-full md:w-1/2 h-full">
    <img 
      src="https://res.cloudinary.com/dbgsublmc/image/upload/v1748874635/Brulee2_azktom.jpg"
      alt="Back view of woman in mirror"
      className="w-full h-full object-cover"
    />
  </div>
</section>


     
      <section className="w-full h-screen bg-[#1c1c1e] text-white flex flex-col items-center justify-center">
        <h1 className="md:text-7xl font-semibold font-[Playfair-Display] text-xl leading-tight uppercase">About Us</h1>
          <p className="font-[Playfair-Display] text-xl mt-9 md:w-1/2 text-justify">Brûlée nace del lazo más poderoso que conocemos: el que une a una madre y una hija con una misma visión.
            Soy Maria Carrillo, emprendedora, amante de la moda y creyente del poder que tiene el estilo en la energía de cada mujer.
            A mi lado, como cofundadora y alma del proyecto, está mi mamá, Marjorie Anez —una mujer fuerte, sensible y creativa que ha sido mi mayor inspiración.
        </p>
        <p className="font-[Playfair-Display] text-xl text-justify mt-4 md:w-1/2">Juntas, creamos brûlée como un espacio donde la belleza, el bienestar y la intención se encuentran.
          Cada pieza refleja nuestra esencia: femenina, minimalista y profundamente consciente.
          No solo tenemos accesorios. Tenemos herramientas de expresión, conexión y confianza para mujeres que saben que su energía comienza en los detalles.
      </p>    
      </section>

      <div id="gallery">
      <img src="https://res.cloudinary.com/dbgsublmc/image/upload/v1747851964/DSC_1357_nkwpmi.jpg" />
      <img src="https://res.cloudinary.com/dbgsublmc/image/upload/v1747685439/DSC_1567_y9eczd.jpg" />
      <img src="https://res.cloudinary.com/dbgsublmc/image/upload/v1747685399/DSC_1535_kiy7vm.jpg" />
      <img src="https://res.cloudinary.com/dbgsublmc/image/upload/v1747685392/DSC_1527_ja5icc.jpg" />
      <img src="https://res.cloudinary.com/dbgsublmc/image/upload/v1747851609/DSC_1424_a482qw.jpg" />
    </div>


      <div className="relative overflow-hidden bg-[#1c1c1e] py-3">
        <div className=" text-[30px] text-black font-light tracking-wide text-center">
          <div className="flex justify-center items-center ">
      
      <span className="text-[20px] px-25  text-white font-[italic]">Elegant</span>
            <span className=" text-[20px] px-25  text-white font-[italic]">Feminine</span>
            <span className="text-[20px] px-25 text-white font-[italic]">Authentic</span>
            <span className="text-[20px] px-25  text-white font-[italic]">Powerful</span>
            
            <span className="text-[20px] px-25  text-white font-[italic]">Minimalist</span>
      </div>
    </div>
  </div>
 
  <div className="relative overflow-hidden bg-[#E0C978] py-3">
        <div className="bg-[#E0C978] text-[30px] text-black  font-lightbold font-[Playfair-Display] tracking-wide text-center">
          <div className="flex justify-center items-center">
            
            <h1 className="text-[30px] tracking-wide text-center px-4 ">WELCOME TO BRULEE</h1>
        </div>
      </div>
      </div>
       <section className=" bg-flex-1 bg-[#1c1c1e] text-white flex flex-col items-center justify-center">
         
  
      </section>
  <Footer />
</div>

          
        
      
    
  );
}
