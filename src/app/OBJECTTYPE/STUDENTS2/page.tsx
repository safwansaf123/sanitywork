import { client } from "@/sanity/lib/client";
import React from "react";

interface IData {
    name: string;
    age: number;
    gender: string;
}

export default async function Student2() {

    const data:IData[] = await client.fetch ('*[_type == "student"]{name,age,gender}')
    console.log("data ===>",data);
 return(

    <div className="p-5 grid grid-cols-4 gap-2">
<h1>hello data of Students method two</h1>

        {
            data.map((student, i)=>{
                return(
            <div key={i} className="shadow-lg border-2 rounded-lg p-5">
                <h1 className="text-xl font-bold ">Students Name: {student.name}</h1>
                <h1 className="text-xl font-bold ">Students Age: {student.age}</h1>
                <h1 className="text-xl font-bold ">Students Gender: {student.gender}</h1>
            </div>)

            })

        }
        
    </div>
 )   
    
};