import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
 
   console.log(props.name)
   return (
      <div>
      {
         props.name.map((data,index)=>{
            return    <Todo key={index} data={data}/>
         })
      }
      </div>
   );
};

export default Todos;