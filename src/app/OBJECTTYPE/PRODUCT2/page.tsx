import { client } from "@/sanity/lib/client";
import React from "react";

interface IData {
    title: string;
    price: number;
    quantity: string;
}

export default async function Aircraft2() {

    const data:IData[] = await client.fetch ('*[_type == "Products"]{title,price,quantity}')
    console.log("data ===>",data);
 return(

    <div className="p-5 grid grid-cols-4 gap-5">
<h1>hello data of aircrafts method two</h1>

        {
            data.map((Products, i)=>{
                return(
            <div key={i} className="shadow-lg border-2 rounded-lg p-5">
                <h1 className="text-xl font-bold ">Product: {Products.title}</h1>
                <h1 className="text-xl font-bold ">Price: {Products.price}</h1>
                <h1 className="text-xl font-bold ">Quantity: {Products.quantity}</h1>
            </div>)

            })

        }
        
    </div>
 )   
    
}