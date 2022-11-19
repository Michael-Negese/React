import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
 
  render() {
    const {count,incrementCount} = this.props // destructre count from
    return (
      <div>
        <button onMouseOver={incrementCount}>Hoverd {count} times</button>
      </div>
    )
  }
}

export default HoverCounterTwo