import React, { Component } from 'react'
import LifeCycleB from '../LifeCycleB';
 class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Yabu',
      }
      console.log('LifeCycleA constructor');

    }
    static getDerivedSateFromProps(props,state) { 
        console.log('LifecycleA getDerivedSateFromProps');
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }
    shouldComponentUpdate() { 
        console.log('LifecycleA shouldComponentUpdate');
        return true
     }  
     getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
     }
     componentDidUpdate(){

     }
     changeState = () => {
        this.setState({ name:'Codeevolution' })
     }
  render() {
    console.log('LifecycleA render')
    return (
      <div>
          <div>LifeCycleA</div>
          <button onClick={this.changeState}>Change State</button>
          <LifeCycleB/>
      </div>
    )
  }

}

export default LifeCycleA