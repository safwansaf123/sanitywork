import { client } from "@/sanity/lib/client";
import React from "react";

interface IData {
    title: string;
    price: number;
    quantity: string;
}

export default async function Aircraft2() {

    const data:IData[] = await client.fetch ('*[_type == "Aircrafts"]{title,price,quantity}')
    console.log("data ===>",data);
 return(

    <div className="p-5 grid grid-cols-4 gap-5">
<h1>hello data of aircrafts method two</h1>

        {
            data.map((aircrafts, i)=>{
                return(
            <div key={i} className="shadow-lg border-2 rounded-lg p-5">
                <h1 className="text-xl font-bold ">Aircraft: {aircrafts.title}</h1>
                <h1 className="text-xl font-bold ">Price: {aircrafts.price}</h1>
                <h1 className="text-xl font-bold ">Quantity: {aircrafts.quantity}</h1>
            </div>)

            })

        }
        
    </div>
 )   
    
}