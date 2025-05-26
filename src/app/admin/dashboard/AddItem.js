
import React from 'react';


export default function AddItem(){

    return(<div className = "flex col-span-4 p-1 rounded border border border-stone-300">

    <table className = "w-full table-auto">
        <TableHead />

        <tbody className = "text-black">
            <TableRow 
                name = "Bracelet"
                price = "$100"
                description = "White diamonds"
                order = {1}
            />
            <TableRow 
                 name = "Item Name"
                 price = "$100"
                 description = "Jewelry very cool"
                 order = {2}
            
            />
            <TableRow 

            
            
            />
            <TableRow />
            <TableRow />
        </tbody>

    </table>



    </div>
    );




}


function TableHead(){

    return(<thead>
        <tr className = "text-xs font-semibold text-black">
            <th className = "text-start p-1.5 border-stone-500">Name</th>
            <th className = "text-start p-1.5">Price</th>
            <th className = "text-start p-1.5">Description</th>




        </tr>
    </thead>);
}


function TableRow({name, price, description, order}){
    return(<tr className = {order % 2 ? "bg-stone-100 text-sm p-0.5" : "text-sm"}>
       
        <td className = "p-1.5">{name}</td>
        <td className = "p-1.5">{price}</td>
        <td className = "p-1.5">{description}</td>
        

    </tr>);


}