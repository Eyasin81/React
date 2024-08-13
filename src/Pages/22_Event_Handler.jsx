import React, { Component } from 'react'
export default class Event_Handler extends Component {
   // OnChager=()=>{
   //    console.log("Hello I am from OnChager");
   // } 
   constructor(props) {
      super(props)
         this.state = {
          ChangeValue:'' ,
         }
      

   }
    handleOnChange=(e)=>{
      // console.log(e.target.value);
      this.setState({
        ChangeValue:e.target.value
      },()=>{
        console.log(this.state.ChangeValue);
      })
   }
  render() {
    return (
      <div>   
     { /* method-1
    <button onClick={this.OnChager}>Click Here</button>*/
   }
      <input type="text" onChange={this.handleOnChange}/>
      <p>{this.state.ChangeValue}</p>
      </div>
    )
  }
}
