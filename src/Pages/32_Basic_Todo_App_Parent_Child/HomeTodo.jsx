import React,{useState} from 'react';
import NewTodo from './NewTodo';
import Todos from './Todos';
const HomeTodo = () => {
const MyTodo=["Todo1", "Todo2", "Todo3"]
const [todo, setTodo] = useState(MyTodo)
const HandleTodo=(dataTodo)=>{
   setTodo([...todo, dataTodo])
}
   return (
      <div>
         <NewTodo onData={HandleTodo}/>
         <Todos name={todo}/>
      </div>
   );
};

export default HomeTodo;