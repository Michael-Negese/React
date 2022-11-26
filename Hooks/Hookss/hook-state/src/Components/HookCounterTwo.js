import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount)
     const incrementFive = () => {
        for(let i = 0; i <5;i++){
            setCount(prev=>prev + 1)
        }
    }
  return (
    <div>
        Count: {count}
        <div>
            <div><button onClick={() => setCount(initialCount)}>Reset</button></div>
            <div><button onClick={()=> setCount(count+1)}>Increment</button></div>
            <div><button onClick={incrementFive}>IncrementFive</button></div>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
        </div>
    </div>
  )
}

export default HookCounterTwo