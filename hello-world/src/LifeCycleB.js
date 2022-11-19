import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name: 'Yabu',
      }
      console.log('LifeCycleB constructor');

    }

    static getDerivedSateFromProps(props,state) { 
        console.log('LifecycleB getDerivedSateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }
    shouldComponentUpdate() { 
        console.log('LifecycleB shouldComponentUpdate');
        return true
     }  
     getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null 
     }
     componentDidUpdate(){
        
     }
  render() {
    console.log('LifecycleB render')
    return (
      <div>LifeCycleB</div>
    )
  }

}

export default LifeCycleB