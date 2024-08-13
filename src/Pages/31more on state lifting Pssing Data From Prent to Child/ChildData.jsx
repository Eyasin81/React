import React from 'react';

const ChildData = (props) => {
const MyObj={
   name:"Eyaisn",
   age:"25",
   City:"Naogaon"
}
// Data Pass Parent to Child
props.onData(MyObj)
   return (
      <div>
         <h1>Hello I am Form Child Data</h1>
      </div>
   );
};

export default ChildData;