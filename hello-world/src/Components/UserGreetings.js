import React, { Component } from 'react'

 class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true,
      }
    }
  render() {
    // let message 
    // if(this.state.isLoggedIn) { message= <div>Welcome Buddy</div>}
    // else {
    //   message = <div>Welcome Guest</div>}
    //   return <div>{message}</div>
    // if(this.state.isLoggedIn) { return (<div>Welcome Buddy</div>)}
    // else { return (<div>Welcome Guest</div>)}
    // return (
    //   <div>
    //     Welcome Everyone
    //   </div>
    // )
    //
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Buddy</div> :
    //     <div>Welcome Guest</div>
    // )
    return this.state.isLoggedIn && <div>Welcome Buddy</div>
  }
}

export default UserGreetings