import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export class ComponentE extends Component {
    static contextType = UserContext // only works for class components and you can subscribe to a single context type
  render() {
    return (
    <div>
        Component E context {this.context}
        <ComponentF/>
    </div>
    )
  }
}


//ComponentE.contextType=UserContext
export default ComponentE
