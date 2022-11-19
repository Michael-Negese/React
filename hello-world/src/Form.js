import React, { Component } from 'react'

export class Form extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comments:'',
         topic:'React'
      }
    }
    
    handleUsernameChange = (event) =>{
         this.setState({
            userName:event.target.value
        })
    }
    handleCommentsChange = (event) =>{  
        this.setState({ 
          comments:event.target.value
         })
    }
    handleTopicChange = (event) =>{
      this.setState({
        topic:event.target.value
      })
    }
    handleSumbit = (event) =>{  
      alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`) 
      event.preventDefault()
     }
  render() {
    const {userName, comments, topic}=this.state;
    return (
      
      <form action="" onSubmit={this.handleSumbit}>
          <div>
            <label>UserName: </label>
            <input type='text' value={userName} onChange={this.handleUsernameChange}/>
            
          </div>
          <div>
            <label>Comments:  </label>
            <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
          </div>
          <div>
            <label>Topic:</label>
            <select value={topic} onChange={this.handleTopicChange}>
          
              <option value="react">React</option>
              <option value="angular">Angualr</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form