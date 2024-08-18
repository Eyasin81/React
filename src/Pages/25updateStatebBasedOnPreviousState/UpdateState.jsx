import React,{useState} from 'react';
const UpdateState = () => {
const [count,setCount]=useState(0)
const HandleChang=(e)=>{
   setName(e.target.value)
}
const IncrementValue=()=>{
   setCount((count)=>count+1)
   setCount((count)=>count+1)
   setCount((count)=>count+1)
}
const DecrementValue=()=>{
   setCount((count)=>count-1)

}

   return (
      <div>
         <h1>{count}</h1>
         <button onClick={IncrementValue}>Increment</button>
         <button onClick={DecrementValue}>Decrement</button>

      </div>
   );
};

export default UpdateState;