export const aircrafts = {

    name:"Aircrafts",     // THIS WILL BE THE PAGE HTTPS://LOCALHOST3000/APP/STRUCTURE/Aircrafts
    type:"document",
    title:"Aircrafts",    // this will show on structure page
    fields: [
        {                 // FEILD 1
        name:"title",    //first letter in lower
        type:"string",
        title:"TYPE"    // first letter in caps shows in sanity studio
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