import React,{useState} from 'react';

const EventHandler_onChange_onClick = () => {
const [state, setState] = useState("")
const handleChang=(e)=>{
   setState(e.target.value)
}
   return (
      <div className='container'>
         <input 
         type="text"
         value={state}
         onChange={handleChang}
         />
         <p className='text-center'>{state}</p>
      </div>
   );
};

export default EventHandler_onChange_onClick;