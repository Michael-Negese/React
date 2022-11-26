import React, { useState,useEffect } from 'react'

function HookCounterONe() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    },[count]) 
    // [count] is the array of values that the effect depends on.
  return (
    <div>
        Enter your name<input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterONe