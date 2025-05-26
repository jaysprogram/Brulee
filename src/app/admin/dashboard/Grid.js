
import React from 'react';
import Stats from './Stats';
import LineGraph from './LineGraph';
import AddItem from './AddItem';


export default function Grid(){


    return(<div className = "px-4 grid gap-3 grid-cols-3 grid-cols-12">


     <Stats />
     <LineGraph />
     <AddItem />
     



    </div>);
}