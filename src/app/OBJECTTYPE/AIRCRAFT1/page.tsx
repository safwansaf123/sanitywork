import { client } from "@/sanity/lib/client";
import React from "react";

async function getData() {
    const fetchData = await client.fetch('*[_type == "Aircrafts"]')     // this data is from Aircraft.ts
    return fetchData
}


export default async function Aircraft() {
    
    const data = await getData()
    console.log(data);
    
    return(
        <div className="p-5 grid grid-cols-4 gap-4">
        <h1>hello data of aircrafts method one </h1>
        
    {
        data.map((val:any, i:number)=>{
return(

    <div className="shadow-lg border-2 rounded-lg p-5">
        <br />
        <br />
        
       <h1>Aircraft =  {val.title}</h1>
        <h2>Price  = {val.price}</h2>
        <h3>quantity = {val.quantity}</h3>
        
        
        
        
        </div>
)

        })
    }
    
    
        </div>
    )
};