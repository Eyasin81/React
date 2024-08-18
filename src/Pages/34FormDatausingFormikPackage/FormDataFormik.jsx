import React from 'react';
import { useFormik } from 'formik';
const FormDataFormik = () => {
   const Formik=useFormik({
      initialValues:{
         name:'',
         email:'',
         password:''
      },
      onSubmit:(values,{resetForm})=>{
         console.log(values);
         resetForm()
      }
   })
 
   return (
      <div>
      <form onSubmit={Formik.handleSubmit}>
      <label>Name</label><br/>
      <input 
      type='text' 
      id="name" 
      value={Formik.values.name} 
      onChange={Formik.handleChange}/>
      <br/>  
      <label>Email</label><br/>
      <input 
      type='email' 
      id="email" 
      value={Formik.values.email} 
      onChange={Formik.handleChange}/>
      <br/>  
      <label>Password</label><br/>
      <input 
      type='password' 
      id="password" 
      value={Formik.values.password} 
      onChange={Formik.handleChange}/>
      <br/>
      <button type='submit'>Summit</button>
      </form>
      </div>
   );
};

export default FormDataFormik;