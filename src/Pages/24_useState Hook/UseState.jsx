import React,{useState} from 'react';

const UseState = () => {
const [name,setName]=useState("Eyasin")
const HandleChang=(e)=>{
   setName(e.target.value)
}

   return (
      <div>
         <input
         type="text"
         value={name}
         onChange={HandleChang}
         />
         <p>{name}</p>

      </div>
   );
};

export default UseState;