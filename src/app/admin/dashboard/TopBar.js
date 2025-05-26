

import React from 'react';
import { FiCalendar } from 'react-icons/fi';


export default function TopBar(){

    return(
    <div className = "w-full border-b px-4 mb-4 mt-8 pb-2 border-stone-200"> 

        <div className = "flex items-center justify-between p-0.5">
         
            <div>

                <span className ="text-m font-bold block text-yellow-500">Hello Owner's Name!</span>
                <span className = "text-xs block text-stone-500"> 01/02/03 </span>

             </div>
        {/*}
             <button className = "flex text-sm items-center gap-2 bg-stone-100 transition colors hover:bg-yellow-500 hover:text-yellow-500 px-3 py-1.5 rounded">
                <FiCalendar />
                <span>Prev 6 months</span>
             </button>
        */}
        </div>











    </div>);

}