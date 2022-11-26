import React,{useReducer} from 'react'
const intialState = {
    fistCounter:0,
    secondCounter:10
}
const reducer = (state,action) => {
    switch(action.type){
        case 'Increment':
            return {...state,fistCounter:state.fistCounter+action.value}
        case 'Decrement':
            return  {...state,fistCounter:state.fistCounter-action.value}
        case 'Increment2':
            return {...state,secondCounter:state.secondCounter+action.value}
        case 'Decrement2':
            return  {...state,secondCounter:state.secondCounter-action.value}
        case 'Reset':
            return intialState
        default:
            return state
    }
}
function CounterTwo() {
    const [count,dispatch] = useReducer(reducer,intialState);
  return (
    <div>
        <div>Fist Conter : {count.fistCounter}</div>
        <div>Second Counter : {count.secondCounter}</div>
        <div>
            <button onClick={()=>dispatch({type:'Increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'Decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'Increment',value:5})}>Increment Five</button>
            <button onClick={()=>dispatch({type:'Decrement',value:5,})}>Decrement Five</button>
        </div>
        <button onClick={()=>dispatch({type:'Increment2',value:1})}>Increment Counter two</button>
        <button onClick={()=>dispatch({type:'Decrement2',value:1,})}>Decrement Counter two</button>
        <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo