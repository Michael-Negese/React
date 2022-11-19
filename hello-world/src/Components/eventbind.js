import React, { Component } from 'react'

class Eventbind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    this.setState({
      message:'Goodbye'
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Button</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Button</button> */}
        <button onClick={this.clickHandler}>Button</button>
        </div>
    )
  }
}

export default Eventbind