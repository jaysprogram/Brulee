
import React from 'react';
import AccountToggle from './AccountToggle';
import SearchBar from './SearchBar';
import RouteSelect from './RouteSelect';



export default function Sidebar(){



    return(<div>
        

        <div className = "overflow-y-scroll sticky top-4 shadow h-[calc(100vh-32px-48px)] w-50 rounded-lg bg-[#1c1c1e]">
            {/* Main sidebar content */}

            <AccountToggle />

            <SearchBar />


    

            <RouteSelect />

    

        </div>



        {/*Plan toggle*/}
        
        
        
    
     </div>);

   
}