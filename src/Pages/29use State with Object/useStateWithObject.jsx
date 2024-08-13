import React,{useState} from 'react';

const useStateWithObject = () => {
const [user,setUser]=useState({
   name:"",
   email:"",
   password:"",
})
const {name,email,password}=user
const handleChang=(e)=>{
   setUser({...user,[e.target.name]:e.target.value})
}
const HandleSubmit=(e)=>{
console.log(user)
}
   return (
      <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
      <div className='w-15 bg-white rounded p-3'>
      <form onSubmit={HandleSubmit}>
      <label className='fw-bold'>Full Name</label><br/>
      <input 
      type="text" 
      placeholder='Enter Your Full Name' 
      name='name' 
      onChange={handleChang} 
      value={name}  
      required/>  <br/>
       <label className='fw-bold'>Email</label><br/>
      <input 
      type="email" 
      placeholder='Enter Your Email' 
      name='email' 
      onChange={handleChang} 
      value={email} 
      required/> 
      <br/>   
      <label className='fw-bold'>Password</label><br/>
      <input 
      type="password" 
      placeholder='Password' 
      name='password' 
      onChange={handleChang}   
      value={password} 
      required
      /> <br/>
      <button type='submit' className='btn btn-primary my-2'>Registration</button>
      </form>
      </div>
      </div>
   );
};

export default useStateWithObject;