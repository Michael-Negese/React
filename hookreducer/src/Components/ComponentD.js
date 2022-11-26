import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentD() {
    const countContext = useContext(CountContext)
  return (
    <div>
         <p>Component D: {countContext.countState}</p>
        <button onClick={()=>countContext.countDispatch('Increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('Decrement')}>Decrement</button>
        <button onClick={()=>countContext.countDispatch('Reset')}>Reset</button>
    </div>
  )
}

export default ComponentD