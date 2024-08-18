import React,{useState} from 'react';

const CollectedData = () => {
const [name,setName]=useState('')
const [mobile,setMobile]=useState('')
const [password,setPassword]=useState('')

const handleSubmit=(e)=>{

let userInfo={
   name:name,
   mobile:mobile,
   password:password
}
console.log(userInfo)

}
   return (
    
      <form onSubmit={handleSubmit} className="">
      <label htmlFor='name'>Name</label>
      <input type='text' 
      className='form-control'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <label htmlFor='mobile'>Mobile</label>
      <input type='mobile' 
      className='form-control'
      value={mobile}
      onChange={(e)=>setMobile(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input type='password' 
      className='form-control'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
   );
};

export default CollectedData;