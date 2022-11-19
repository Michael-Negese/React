import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMessage:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response =>{
            console.log(Response)
            this.setState({posts:Response.data})
        })
        .catch(Error => {
            console.log(Error)
            this.setState({errorMessage:'Error retreiving data'})
        })
    }

  render() {
    const {posts,errorMessage}=this.state;
    return (
      <div>
        List of posts
        {
            posts.length ?
            posts.map(posts=><div key={posts.id}>{posts.title}</div>):
            null
        }
        {
            errorMessage ?
            <div>{errorMessage}</div> : null
        }
      </div>
    )
  }
}

export default PostList