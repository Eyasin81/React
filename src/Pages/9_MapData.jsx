import React from 'react';
const MyId=[
   {  
      name:"eyains",
      "age":25,
      "City":"Naogaon"
   },
   {  
      
      name:"Abdur Rahman",
      "age":20,
      "City":"DinajPur"
   },   
   {  
      name:"Noyon",
      "age":24,
      "City":"Khulna"
   }
]
const MapData = () => {
   return (
      <div>
         {
           MyId.map((data,index)=>{
            return(
           <div  key={index}>
               <h1>{data.name}</h1>
               <h1>{data.age}</h1>
               <h1>{data.City}</h1>
           </div>
            )
           })
         }
      </div>
   );
};

export default MapData;