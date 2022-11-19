import React, { Component, PureComponent } from 'react'
import PureComp from './PureComponent'
import RegularComponent from './RegularComponent'
import MemoComponent from './MemoComponent'
 class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Yabu',
      }
    }
    componentDidMount() {
        setInterval(() => this.setState({
            name: 'Yabu',
        }), 2000)  
    }
  render() {
    console.log('************* Parent Component ***************');
    return (
      <div>ParentComp
        {/* <RegularComponent name={this.state.name}></RegularComponent>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComponent name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp