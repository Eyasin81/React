import React from 'react';

const StopPropagation = () => {

const ParentClick=(event)=>{
// Parent Click করলে পারেন্ট দেখাবে 
   console.log("I am a parent Propagation",event)
}

const ChildClick=(event)=>{
// ChildClick Click করলে Child ও Parent  দেখাবে । এটি বন্ধ করার জন্য  event.stopPropagation( ) ব্যবহার করা হয় । 
event.stopPropagation()
   console.log("I am a Child Propagation",event)
}
   return (
      <div className='container' onClick={ParentClick}>
         <p >This is a Parent Paragraph</p>
         <button onClick={ChildClick}>Child Propagation</button>
      </div>
   );
};

export default StopPropagation;