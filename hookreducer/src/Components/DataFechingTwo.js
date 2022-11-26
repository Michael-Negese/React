import React,{useReducer,useEffect}from 'react'
import axios from 'axios'
const intialState = {
    loading: true,
    error:'',
    post:{}
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_FAIL':
            return {
                loading:true,
                post:{},
                error:'something went wrong!'
            }
        default:
            return state
    }
}
function DataFechingTwo() {
  const [currentSate,dispatch] =   useReducer(reducer,intialState)

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(Response =>{
       dispatch({type:'FETCH_SUCCESS',payload : Response.data})
    })
    .catch(error => {
        dispatch({type:'FETCH_FAIL'})
    })
},[])

  return (
    <div>
        {currentSate.loading?'Loading':currentSate.post.title}
        {currentSate.error?currentSate.error:null}
    </div>
  )
}

export default DataFechingTwo