
"use client";


import React from 'react';
import { FiCommand, FiSearch } from 'react-icons/fi';
{/*import { CommandMenu } from './CommandMenu';*/}

export default function SearchBar(){

   {/* const [open, setOpen] = React.useState(false);*/}

    return(<div className = "bg-stone-500 mb-4 relative rounded flex items-center px-1 py-1.5 text-sm">

        {/*Imports la lupita */}
        <FiSearch className = "mr-2 text-white"/>

        <input
            onFocus={e => {
                e.target.blur();
                setOpen(true);
            }}

            type = "text"
            placeholder = "Search"
            className = "w-full bg-transparent placeholder:text-stone-400 focus:outline-none text-white"
    
        />
        
        <span className = "p-1 text-xs flex gap-0.5 items-center shadow bg-stone-600 rounded absolute right-1.5 top-1/2 -translate-y-1/2 text-white">

            <FiCommand />K

        </span>
       

       {/*<CommandMenu open = {open} setOpen = {setOpen} />*/}


    </div>);





}