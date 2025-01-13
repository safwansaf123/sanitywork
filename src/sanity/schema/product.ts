export const products ={

    name:"Products",
    type:"document",
    title:"Products",
    fields: [
        {                 // FEILD 1
        name:"title",    //first letter in lower
        type:"string",
        title:"Title"    // first letter in caps shows in sanity studio
        },
        {                 // FEILD 2
        name:"price",
        type:"string",
        title:"Price"
        },
        {                   // FEILD 3
        name:"quantity",
        type:"number",
        title:"Quanity"
        }
        ]
}