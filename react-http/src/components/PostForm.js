import React, { Component } from 'react'
import axios from 'axios'
 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeHandler = (e) => {
        //the one in the bracket is the key
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => { 
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response => {
          console.log(Response)
        })
        .catch(Error => {
          console.log(Error)
          
        })
    }
  render() {
    const {userId,title,body} = this.state
    return (
      <div>
    <form onSubmit={this.submitHandler}>
        <div>
           UserId: <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input>
        </div>
        <div>
            Title:<input type="text" name="title" value={title} onChange={this.changeHandler}></input>
        </div>
        <div>
            Body:<input type="text" name="body" value={body} onChange={this.changeHandler}></input>
        </div>
        <button type="submit">Submit</button>
    </form>
      </div>
    )
  }
}

export default PostForm