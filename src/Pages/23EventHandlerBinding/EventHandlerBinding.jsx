import React, { Component } from 'react'

export default class EventHandlerBinding extends Component {
  constructor(props){
    super(props);
    this.state={
      count:1
    }
  }
  IncrementValue=()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  render() {
    return (
      <div className='container justify-content-center align-content-center'>
        <h3 className='text-center'>Counter App {this.state.count}</h3>
        <button className='btn btn-primary' onClick={this.IncrementValue.bind(this)}>Increment</button>
        </div>
    )
  }
}
