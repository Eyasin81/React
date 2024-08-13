import React from 'react';
import ChildData from './ChildData';

const ParentData = () => {
const HandleChang=(data)=>{
console.log(data)
}

   return (
      <div>
         <ChildData onData={HandleChang}/>
         <HandleChang/>
      </div>
   );
};

export default ParentData;