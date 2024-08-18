import React,{useState} from 'react';

const Assignment_2 = () => {
const [count,setCount]=useState(0)

const IncrementValue = () => setCount(count + 1)
const DecrementValue = () => setCount(count - 1)
   return (
      <div className='container d-flex justify-content-center mt-4'>
        <div className='align-items-center'>
        <h2 className='text-center'>{count}</h2>
        <button className='btn btn-primary mx-2' onClick={IncrementValue} disabled={count===5?true:false}>Increment</button>
        <button className='btn btn-danger mx-2' onClick={DecrementValue} disabled={count===-5?true:false}>Decrement</button>
        </div>
      </div>
   );
};

export default Assignment_2;