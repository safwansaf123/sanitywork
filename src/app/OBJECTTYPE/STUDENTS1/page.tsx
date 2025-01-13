import { client } from "@/sanity/lib/client";
import React from "react";

async function getData() {
    const fetchData = await client.fetch('*[_type == "student"]')     // this data is from student.ts
    return fetchData
}


export default async function Student1() {
    
    const data = await getData()
    console.log(data);
    
    return(
        <div className="p-5 grid grid-cols-4 gap-4">
        <h1>hello data of Students method one </h1>
        
    {
        data.map((val:any, i:number)=>{
return(

    <div className="shadow-lg border-2 rounded-lg p-5">
        <br />
        <br />
        
       <h1>Student Name =  {val.name}</h1>
        <h2>Student Age  = {val.age}</h2>
        <h3>Student Gender = {val.gender}</h3>
               
                
        </div>
)

        })
    }
    
    
        </div>
    )
};