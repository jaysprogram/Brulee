
import React from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";



export default function AccountToggle(){

    {/*Makes the border */}
    return(<div className = "flex flex-col border-b mb-4 mt-4 pb-2 shadow border-stone-200">
 

    {/*Make the hover a really light yellow */}
    <button className = "relative flex px-10 py-5 p-10 hover:bg-stone-500 rounded transition-colors relative gap-2 w-full">

       
       {/*the little icon*/} 
       <img
            src="https://api.dicebear.com/9.x/icons/svg?seed=Ryker"
            alt="avatar" 

            className = "absolute top-0 left-2 size-10 rounded shrink-0"

        />

        {/*The name of the owner + email */}
        <div className = "text-start">
            <span className = "absolute top-0 left-14 text-sm font-bold block text-yellow-500">Owner's name</span>

            <span className = "absolute top-5 left-14 text-xs block text-stone-100"> email123@thing.com</span>
    

        </div>


       {/*The toggle */}
        <FiChevronDown className = "absolute right-2 top-1/4 translate-y-[calc(-50%+4px)] text-xs text-white"/>
        <FiChevronUp className = "absolute right-2 top-1/4 translate-y-[calc(-50%-4px)] text-xs text-white"/>


       
    </button>
     

    </div>);
}