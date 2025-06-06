'use client';


import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
//import umaylike from '../umaylike';
//import { getRecommendedProducts } from '../umaylike';
//import { getRecommendedProducts } from '../../umaylike';
//import YouMayLike from './umaylike'; 




const FAKE_CART =
[
  {
    id: 1,
    name: "White Flower",
    description:
      "This widget does everything you ever dreamed of—and a little more. Crafted with precision and care.",
    price: 19.99,
    image: "/public/jewelry-pic/whiteFlower.png", 
    features:
    [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
  },
  {
    id: 1,
    name: "Product 2",
    description:
      "This widget does everything you ever dreamed of—and a little more. Crafted with precision and care.",
    price: 19.99,
    image: "", // put a placeholder in /public/images/widget.jpg
    features:
    [
      "Feature One: Ultra‑durable",
      "Feature Two: Super efficient",
      "Feature Three: Compact design",
    ],
  },
];




export default function Page() {
    ////////// Cart State //////
    const [cart, setCart] = useState([]);

    const subtotal= cart.reduce((acc, item) => acc + item.price * (item.quantity||1), 0);
    const taxRate = 0.07;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
/*
    const firstItem = cart[0];
    const recommended = firstItem
    ? getRecommendedProducts(firstItem.id)
    : [];*/



  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
    else {
      setCart(FAKE_CART);
    }
  }, []);
    ////////




const [step, setStep] = useState("billing");

   // Reusable Input Component
const InputField = ({ label, id, type = "text", width = "w-60", placeholder = "" }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-medium text-black mb-1">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className={`${width} rounded-md px-3 py-2 text-sm border border-gray-200 bg-gray-100 shadow-sm focus:outline-none focus:border-[#fbc560ff]`}
    />
  </div>
);

//Form Rendering Logic
const renderForm = () => {
  const commonFields = (
    <>
      <div className="flex gap-4">
        <InputField label="First Name" id="firstName" />
        <InputField label="Last Name" id="lastName" />
      </div>
      <div className="flex flex-col mt-6">
        <InputField label="Phone" id="phone" type="tel" width="w-124" />
      </div>
      <div className="flex flex-col mt-6">
        <InputField label="Email" id="email" type="email" width="w-124" />
      </div>
      <div className="flex gap-4 mt-6">
        <InputField label="City" id="city" />
        <InputField label="Country" id="country" />
      </div>
    </>
  );

  switch (step) {
    case "billing":
      return (
        <form className="w-full max-w-3xl mx-auto mt-6">
          <h2 className="text-xl font-medium mb-4">Billing Details</h2>
          {commonFields}
        </form>
      );

    case "shipping":
      return (
        <form className="w-full max-w-3xl mx-auto mt-6">
          <h2 className="text-xl font-medium mb-4">Shipping Details</h2>
          {commonFields}
        </form>
      );

    case "payment":
      return (
        <form className="w-full max-w-3xl mx-auto mt-6">
          <h2 className="text-lg font-medium mb-4">Payment Information</h2>
          <div className="space-y-4">
            <InputField label="Card Number" id="cardNumber" placeholder="1234 5678 9012 3456" width="w-124" />
            <InputField label="Name on Card" id="nameCard" placeholder="Full name" width="w-124" />
            <div className="flex gap-4">
              <InputField label="Expiry Date" id="expirationDate" placeholder="MM/YY" />
              <InputField label="CVV" id="cvv" placeholder="CVV" />
            </div>
          </div>
        </form>
      );

    default:
      return null;
  }
};


  return (
  <div className="bg-white min-h-screen w-full text-black overflow-y-auto font-serif">
    <Navbar />


    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Step Indicator */}
      <div className=" steps flex justify-center space-x-6 mb-8 font-semibold text-gray-400">
        <span className={`step ${step === "billing" ? "text-black  underline  underline-offset-4 decoration-2" : ""}`}>1. Billing</span>
        <span className={`step ${step === "shipping" ? "text-black underline underline-offset-4 decoration-2" : ""}`}>2. Shipping</span>
        <span className={`step ${step === "payment" ? "text-black underline underline-offset-4 decoration-2" : ""}`}>3. Payment</span>
      </div>


      {/* Form + Summary Side-by-Side */}
      <div className="flex flex-col lg:flex-row gap-8">
        {renderForm()}


        {/*Order Summary Box */}
        <div className="w-full lg:w-[800px] min-h-fit bg-white border border-gray-200 p-6 shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold mb-4">ORDER SUMMARY</h2>


          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity|| 1}</p>
                  </div>
                  <p className="font-medium">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}


          {/* Total Calculation */}
          <div className="text-sm space-y-4 mt-6 border-t pt-4 mb-6">
            
            <div className="flex justify-between"><span>Subtotal:</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping:</span><span>–</span></div>
            <div className="flex justify-between"><span>Tax:</span><span>${tax.toFixed(2)}</span></div>
            <div className="flex justify-between font-bold border-t pt-2"><span>Total:</span><span>${total.toFixed(2)}</span></div>
          </div>


          <button
            type="button"
            onClick={() => {
              if (step === "billing") setStep("shipping");
              else if (step === "shipping") setStep("payment");
              else console.log("At payment step");
            }}
            className=" w-full bg-black text-white py-2 rounded font-semibold transition duration-200 ease-in-out hover:bg-neutral-800 active:bg-neutral-900 focus:ring-2 focus:ring-white"
           
          >
            {step === "payment" ? "PAY NOW" : "CHECK OUT"}
          </button>
        </div>
      </div>


      {/* "You may also like" */}
      <h2 className="text-lg font-semibold mt-12">You may also like </h2>
    </main>


    <Footer />
  </div>
);
}








