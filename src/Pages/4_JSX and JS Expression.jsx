import React from 'react';

const Expression = () => {
const MyData=new Date()
const MyYear=MyData.getFullYear()
const MyMonth=MyData.getMonth()
const myDay=MyData.getDay()
   return (
      <div>
      <h4>Simple Date</h4>
         <h4>{MyYear+"/"+MyMonth+"/"+myDay}</h4>
      </div>
   );
};

export default Expression;