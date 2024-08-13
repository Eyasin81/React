import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render(props) {
    return (
      <div>
        <h3>My Name is {this.props.name}</h3>
      </div>
    )
  }
}
