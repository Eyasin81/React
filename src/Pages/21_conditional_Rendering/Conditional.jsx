import React, { Component } from 'react'
// import Here
import Home from '../Home';
import Login from './Login';

export default class Conditional extends Component {
   constructor(props){
      super(props)
      this.state={
         isLogin:true
      }
   }
/*   
// Method-1 if-else Condition Rendering
render() {
   if(this.state.isLogin){
      return (
         <Login/>
      )
      
  }else{
   return (
      <Home/>
   )
  }
}
}
 */
// Method-2 Ternary Condition
/* render() {
const {isLogin}=this.state
let element;
element=isLogin?<Login/>: <Home/>
return(
   element
)
}
} */
// Short Circuit Methods 
render() {
   const {isLogin}=this.state
   return(
     <div>
     {isLogin&& <Home/>}
     </div>
   )
}
   }