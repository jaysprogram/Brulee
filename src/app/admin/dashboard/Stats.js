
import React from 'react';
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

export default function Stats(){

    return (
        <>
            <Card 
                title = "Total Purchases"
                value = "$1,234"
                pillText= "2.75%"
                trend = "up"
                period = "From Jan 1st to Jul 31st"
            
            />
            <Card 
                title = "Total Customers"
                value = "4000"
                pillText= "1.05%"
                trend = "down"
                period = "From Jan 1st to Jul 31st"
            
            />

            {/*I want this one to be a pie chart */}
            <Card 
                title = "Purchases"
                value = "1,234"
                pillText= "2.75%"
                trend = "up"
                period = "From Jan 1st to Jul 31st"
            
            />
        
        </>
        
        

    );
}


function Card({title, value, pillText, trend, period}){

    return(
    <div className = "p-4 col-span-4 rounded border border-stone-300">
        <div className = "flex mb-8 items-start justify-between">
            <div>
                <h3 className = "text-stone-500 mb-2 text-sm">{title}</h3>
                <p className = "text-black text-3xl font-semibold">{value}</p>
            </div>

            <span className = {`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${trend == "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {trend == "up" ? <FiTrendingUp /> : <FiTrendingDown />}
            {pillText}
            </span>

        </div>

        <p className = "text-xs text-stone-500">{period}</p>
        
    </div>);
}