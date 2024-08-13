import React,{useState} from 'react';

const NewTodo = (props) => {
const [todo,setTodo]=useState()

const handleChange=(e)=>{
  setTodo(e.target.value)
}

const HandleSubmit=(e)=>{
   e.preventDefault()
  props.onData(todo)
}
   return (
      <form onSubmit={HandleSubmit}>
      <input 
      type="text" 
      placeholder="Enter your todo..."
      value={todo}
      onChange={handleChange}
      />
      <button type="submit" className='btn btn-primary'>Add Todo</button>
      </form>
   );
};

export default NewTodo;