import React, { Component } from 'react'
 class ClassClick extends Component {
     clickHandler(){
        console.log('Clicked button')
    }
  render() {
    return (
      <div><button onClick={this.clickHandler}>cButton</button></div>
    )
  }
}

export default ClassClick