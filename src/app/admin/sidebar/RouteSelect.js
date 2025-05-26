
import React from 'react';
import Link from "next/link";
import { FiDollarSign, FiHome, FiShoppingBag, FiUsers } from 'react-icons/fi';



{/*Rewrote the routing logic, similar to the navbar one  */}

export default function RouteSelect(){

    return (
      <div className="space-y-1 title-white">

        <Link href = "/admin">
            <button className = "flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color, _color] hover:bg-stone-500 text-stone-950 shadow">
              <FiHome className = "text-yellow-500"/>
              <span className = "text-white">Dashboard</span>
            </button>
              
        </Link>

        <Link href = "/admin/Orders">
            <button className = "flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color, _color] hover:bg-stone-500 text-stone-950 shadow">
              <FiDollarSign className = "text-white"/>
              <span className = "text-white">Orders</span>
            </button>
              
        </Link>

        <Link href = "/admin/Products">
            <button className = "flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color, _color] hover:bg-stone-500 text-stone-950 shadow">
              <FiShoppingBag className = "text-white"/>
              <span className = "text-white">Products</span>
            </button>
              
        </Link>

        <Link href = "/admin/Customers">
            <button className = "flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color, _color] hover:bg-stone-500 text-stone-950 shadow">
              <FiUsers className = "text-white"/>
              <span className = "text-white">Customers</span>
            </button>
              
        </Link>


      </div>
    
    )
  }
  

{/* 
function Route ({ selected, Icon, title }){
    return (
      <button
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color, _color] ${ 
            selected
            ? "hover:bg-stone-500 text-stone-950 shadow"
            : "hover:bg-stone-500 bg-transparent text-white shadow-none"}`}
        
      >
        <Icon className = {selected ? "text-yellow-400": ""}/>
  
        <span className= "text-white">{title}</span>
      </button>
    )
  }
 */}