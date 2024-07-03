import React,{useState} from 'react';
const UseState = () => {
const [count,setCount]=useState(0)

   return (
      <div>
         <h1>Counter App</h1>
         <h3>Count: {count}</h3>
         <button onClick={()=>setCount(count+1)} className="btn btn-primary">Increment</button>   
         <button onClick={()=>setCount(count-1)} className="btn btn-danger mx-2">Decrement</button>
      </div>
   );
};

export default UseState;