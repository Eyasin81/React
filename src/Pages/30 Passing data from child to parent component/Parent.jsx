import React from 'react';
import Child from './Child';

const Parent = () => {
   // Object Pass Parent to Child
   const myObj={
      name:"Eyasin Ali",
      age:"24",
      current:"23"
   }
   // Function Pass Parent to Child
   const myCode=()=>{
      return "Hello I am a Function from Parent to Child"
   }

   return (
      <div>
      <h4>I am form Parent</h4>
         <Child name="Eyasin" obj={myObj} onMyFunc={myCode}/>
      </div>
   );
};

export default Parent;