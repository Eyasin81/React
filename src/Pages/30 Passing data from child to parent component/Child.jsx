import React from 'react';

const Child = (props) => {
   const Obj=props.obj
   console.log(Obj.name)

   const MyFunc=props.onMyFunc
   
   return (
      <div>
         <h3>CHild</h3>
         <h3>My Name is {props.name}</h3>
         <p>{Obj.name}</p>
         <MyFunc/>
      </div>
   );
};

export default Child;